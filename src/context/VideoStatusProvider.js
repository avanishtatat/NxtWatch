import {Component} from 'react'
import VideoStatusContext from './VideoStatusContext'

class VideoStatusProvider extends Component {
  state = {
    videoStatus: {},
  }

  toggleLike = videoId => {
    this.setState(prevState => ({
      videoStatus: {
        ...prevState.videoStatus,
        [videoId]: {
          ...prevState.videoStatus[videoId],
          isLiked: !prevState.videoStatus[videoId]?.isLiked,
          isDisliked: false,
        },
      },
    }))
  }

  toggleDislike = videoId => {
    this.setState(prevState => ({
      videoStatus: {
        ...prevState.videoStatus,
        [videoId]: {
          ...prevState.videoStatus[videoId],
          isDisliked: !prevState.videoStatus[videoId]?.isDisliked,
          isLiked: false,
        },
      },
    }))
  }

  toggleSave = video => {
    this.setState(prevState => ({
      videoStatus: {
        ...prevState.videoStatus,
        [video.id]: {
          ...prevState.videoStatus[video.id],
          isSaved: !prevState.videoStatus[video.id]?.isSaved,
          videoDetails: prevState.videoStatus[video.id]?.isSaved ? null : video,
        },
      },
    }))
  }

  render() {
    const {videoStatus} = this.state
    const {children} = this.props
    return (
      <VideoStatusContext.Provider
        value={{
          videoStatus,
          toggleLike: this.toggleLike,
          toggleDislike: this.toggleDislike,
          toggleSave: this.toggleSave,
        }}
      >
        {children}
      </VideoStatusContext.Provider>
    )
  }
}

export default VideoStatusProvider
