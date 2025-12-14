import React from 'react'

const VideoStatusContext = React.createContext({
  videoStatus: {},
  toggleLike: () => {},
  toggleDislike: () => {},
  toggleSave: () => {},
})

export default VideoStatusContext
