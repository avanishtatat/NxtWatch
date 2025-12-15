import {HiFire} from 'react-icons/hi'

import VideoStatusContext from '../../context/VideoStatusContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoItem from '../SavedVideoItem'
import {
  SavedVideosContainer,
  SavedVideosBody,
  SavedVideosContent,
  Banner,
  ImageContainer,
  Heading,
  NoVideos,
  Image,
  Description,
  ListContainer,
} from './styledComponents'

const SavedVideos = () => (
  <VideoStatusContext.Consumer>
    {value => {
      const {videoStatus} = value

      const videosList = Object.values(videoStatus).filter(
        each => each.isSaved && each.videoDetails,
      )

      const renderSavedVideos = () => (
        <ListContainer>
          {videosList.map(video => (
            <SavedVideoItem
              key={video.videoDetails.id}
              video={video.videoDetails}
            />
          ))}
        </ListContainer>
      )

      const noSavedVideosFoundView = () => (
        <NoVideos>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading>No saved videos found</Heading>
          <Description>
            You can save your videos while watching them
          </Description>
        </NoVideos>
      )

      return (
        <SavedVideosContainer data-testid="savedVideos">
          <Header />
          <SavedVideosBody>
            <Sidebar />
            <SavedVideosContent>
              <Banner>
                <ImageContainer>
                  <HiFire size={40} color="ff0000" />
                </ImageContainer>
                <Heading>Saved Videos</Heading>
              </Banner>
              {videosList.length === 0
                ? noSavedVideosFoundView()
                : renderSavedVideos()}
            </SavedVideosContent>
          </SavedVideosBody>
        </SavedVideosContainer>
      )
    }}
  </VideoStatusContext.Consumer>
)

export default SavedVideos
