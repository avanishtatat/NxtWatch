import {formatDistanceToNow} from 'date-fns'

import {
  VideoLink,
  VideoCard,
  Image,
  VideoContent,
  Profile,
  VideoDescription,
  Title,
  VideoStatus,
  StatusText,
  ViewList,
  List,
} from './styledComponents'

const SavedVideoItem = props => {
  const {video} = props
  const {
    id,
    channel,

    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = video

  return (
    <VideoLink to={`/videos/${id}`}>
      <VideoCard>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <VideoContent>
          <Profile src={channel.profileImageUrl} alt="channel logo" />
          <VideoDescription>
            <Title>{title}</Title>
            <VideoStatus>
              <StatusText>{channel.name}</StatusText>
              <ViewList>
                <List>
                  <StatusText>{viewCount} views</StatusText>
                </List>
                <li>
                  <StatusText>
                    {formatDistanceToNow(new Date(publishedAt))}
                  </StatusText>
                </li>
              </ViewList>
            </VideoStatus>
          </VideoDescription>
        </VideoContent>
      </VideoCard>
    </VideoLink>
  )
}

export default SavedVideoItem
