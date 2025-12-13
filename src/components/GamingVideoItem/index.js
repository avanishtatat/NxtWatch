import {
  VideoLink,
  VideoCard,
  Thumbnail,
  TextContainer,
  Title,
  View,
} from './styledComponents'

const GamingVideoItem = props => {
  const {gamingVideo} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideo

  return (
    <VideoLink to={`/videos/${id}`}>
      <VideoCard>
        <Thumbnail src={thumbnailUrl} />
        <TextContainer>
          <Title>{title}</Title>
          <View>{viewCount} Watching Worldwide</View>
        </TextContainer>
      </VideoCard>
    </VideoLink>
  )
}

export default GamingVideoItem
