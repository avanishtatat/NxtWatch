import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import Sidebar from '../Sidebar'

import ReactLoader from '../ReactLoader'
import Failure from '../Failure'
import VideoDetails from '../VideoDetails'

import {
  VideoItemDetail,
  VideoDetailsBody,
  VideoContents,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: null,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoDetailsApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(videoDetailsApi, options)
      const data = await response.json()
      if (response.ok) {
        const formattedData = {
          id: data.video_details.id,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          description: data.video_details.description,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          videoUrl: data.video_details.video_url,
          title: data.video_details.title,
          viewCount: data.video_details.view_count,
        }
        this.setState({
          videoDetails: formattedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderLoader = () => <ReactLoader />

  renderFailureView = () => <Failure retryApi={this.onClickRetry} />

  renderVideoDetails = () => {
    const {videoDetails, isSaved, isDisliked, isLiked} = this.state
    return <VideoDetails videoDetails={videoDetails} />
  }

  renderVideoDetailsPage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <VideoItemDetail data-testid="videoItemDetails">
        <Header />
        <VideoDetailsBody>
          <Sidebar />
          <VideoContents>{this.renderVideoDetailsPage()}</VideoContents>
        </VideoDetailsBody>
      </VideoItemDetail>
    )
  }
}

export default VideoItemDetails
