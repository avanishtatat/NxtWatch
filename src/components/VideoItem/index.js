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
  const {video} = props
  const {id, channel, title, thumbnailUrl, viewCount, publishedAt} = video

  return (
    <Video to={`/videos/${id}`}>
      <VideoList>
        <Image src={thumbnailUrl} />
        <VideoContent>
          <Profile src={channel.profileImageUrl} />
          <Content>
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
