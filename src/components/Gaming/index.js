import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import ReactLoader from '../ReactLoader'
import Failure from '../Failure'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideoItem from '../GamingVideoItem'

import {
  GamingContainer,
  GamingBody,
  GamingContent,
  Banner,
  ImageContainer,
  Heading,
  GamingVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(gamingApiUrl, options)
      const data = await response.json()
      if (response.ok) {
        const formattedData = data.videos.map(gamingVideo => ({
          id: gamingVideo.id,
          thumbnailUrl: gamingVideo.thumbnail_url,
          title: gamingVideo.title,
          viewCount: gamingVideo.view_count,
        }))

        this.setState({
          apiStatus: apiStatusConstants.success,
          gamingVideosList: formattedData,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  renderLoading = () => <ReactLoader />

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <Failure retryApi={this.onClickRetry} />

  renderGamingVideos = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingVideos>
        {gamingVideosList.map(gamingVideo => (
          <GamingVideoItem key={gamingVideo.id} gamingVideo={gamingVideo} />
        ))}
      </GamingVideos>
    )
  }

  renderGamingPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <GamingContainer data-testid="gaming">
        <Header />
        <GamingBody>
          <Sidebar />
          <GamingContent>
            <Banner>
              <ImageContainer>
                <SiYoutubegaming size={40} color="ff0000" />
              </ImageContainer>
              <Heading>Gaming</Heading>
            </Banner>
            {this.renderGamingPage()}
          </GamingContent>
        </GamingBody>
      </GamingContainer>
    )
  }
}

export default Gaming
