import {formatDistanceToNow} from 'date-fns'

import {
  Video,
  VideoList,
  Image,
  VideoContent,
  Profile,
  Content,
  Title,
  Channel,
  Name,
  ViewContainer,
  View,
  TimeSpan,
} from './styledComponents'

const VideoItem = props => {
  const {video, varient} = props
  const {id, channel, title, thumbnailUrl, viewCount, publishedAt} = video

  return (
    <Video to={`/videos/${id}`}>
      <VideoList varient={varient}>
        <Image src={thumbnailUrl} varient={varient} alt="video thumbnail" />
        <VideoContent>
          <Profile
            src={channel.profileImageUrl}
            varient={varient}
            alt="channel logo"
          />
          <Content varient={varient}>
            <Title>{title}</Title>
            <Channel>
              <Name>{channel.name}</Name>
              <ViewContainer>
                <View>{viewCount}</View>
                <TimeSpan>
                  {formatDistanceToNow(new Date(publishedAt))}
                </TimeSpan>
              </ViewContainer>
            </Channel>
          </Content>
        </VideoContent>
      </VideoList>
    </Video>
  )
}

export default VideoItem
