import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import ReactLoader from '../ReactLoader'
import Failure from '../Failure'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import {
  TrendingContainer,
  TrendingBody,
  TrendingContent,
  Banner,
  ImageContainer,
  Heading,
  TrendingVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideoApi = 'https://apis.ccbp.in/videos/trending'
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideoApi, option)
    const data = await response.json()
    try {
      if (response.ok) {
        const formattedData = data.videos.map(video => ({
          id: video.id,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          viewCount: video.view_count,
          title: video.title,
        }))
        // console.log(formattedData)
        this.setState({
          trendingVideosList: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  renderLoader = () => <ReactLoader />

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => <Failure retryApi={this.onClickRetry} />

  renderTrendingVideos = () => {
    const {trendingVideosList} = this.state
    return (
      <TrendingVideos>
        {trendingVideosList.map(video => (
          <VideoItem key={video.id} video={video} varient="trending" />
        ))}
      </TrendingVideos>
    )
  }

  renderTrendingPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      default:
        return null
    }
  }

  render() {
    return (
      <TrendingContainer data-testid="trending">
        <Header />
        <TrendingBody>
          <Sidebar />
          <TrendingContent>
            <Banner>
              <ImageContainer>
                <HiFire size={40} color="ff0000" />
              </ImageContainer>
              <Heading>Trending</Heading>
            </Banner>
            {this.renderTrendingPage()}
          </TrendingContent>
        </TrendingBody>
      </TrendingContainer>
    )
  }
}

export default Trending
