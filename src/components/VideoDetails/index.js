import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import VideoStatusContext from '../../context/VideoStatusContext'
import {
  ReactPlayerContainer,
  Title,
  Container,
  ViewContainer,
  Text,
  ButtonContainer,
  Button,
  ButtonText,
  HrLine,
  ChannelDetailContainer,
  Profile,
  ChannelDetailText,
  ChannelName,
  ChannelSub,
  Description,
} from './styledComponents'

const VideoDetails = props => (
  <VideoStatusContext.Consumer>
    {value => {
      const {videoStatus, toggleLike, toggleDislike, toggleSave} = value
      const {videoDetails} = props

      const {
        id,
        title,
        videoUrl,
        description,
        channel,
        publishedAt,
        viewCount,
      } = videoDetails

      const status = videoStatus[id] || {}

      const isLiked = status.isLiked || false
      const isDisliked = status.isDisliked || false
      const isSaved = status.isSaved || false

      const onClickLike = () => {
        toggleLike(id)
      }

      const onClickDislike = () => {
        toggleDislike(id)
      }

      const onClickSave = () => {
        toggleSave(videoDetails)
      }

      return (
        <>
          <ReactPlayerContainer>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              className="react-player"
            />
          </ReactPlayerContainer>
          <Title>{title}</Title>
          <Container>
            <ViewContainer>
              <Text>{viewCount} views</Text>
              <Text>{formatDistanceToNow(new Date(publishedAt))}</Text>
            </ViewContainer>
            <ButtonContainer>
              <Button type="button" onClick={onClickLike}>
                <BiLike size={25} color={isLiked ? '#2563eb' : '#64748b'} />
                <ButtonText isActive={isLiked}>Like</ButtonText>
              </Button>
              <Button type="button" onClick={onClickDislike}>
                <BiDislike
                  size={25}
                  color={isDisliked ? '#2563eb' : '#64748b'}
                />
                <ButtonText isActive={isDisliked}>Dislike</ButtonText>
              </Button>
              <Button type="button" onClick={onClickSave}>
                <MdPlaylistAdd
                  size={25}
                  color={isSaved ? '#2563eb' : '#64748b'}
                />
                <ButtonText isActive={isSaved}>
                  {isSaved ? 'Saved' : 'Save'}
                </ButtonText>
              </Button>
            </ButtonContainer>
          </Container>
          <HrLine />
          <ChannelDetailContainer>
            <Profile src={channel.profileImageUrl} />
            <ChannelDetailText>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelSub>{channel.subscriberCount} subscribers</ChannelSub>
            </ChannelDetailText>
          </ChannelDetailContainer>
          <Description>{description}</Description>
        </>
      )
    }}
  </VideoStatusContext.Consumer>
)

export default VideoDetails
