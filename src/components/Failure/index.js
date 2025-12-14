import ThemeContext from '../../context/ThemeContext'
import {
  Container,
  Image,
  Heading,
  Description,
  Button,
} from './styledComponents'

const Failure = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {retryApi} = props
      const onClickRetry = () => {
        retryApi()
      }
      const failureImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      return (
        <Container>
          <Image src={failureImageUrl} alt="failure view" />
          <Heading>Oops! Something Went Wrong</Heading>
          <Description>
            We are having some trouble to complete your request. Please try
            again.
          </Description>
          <Button type="button" onClick={onClickRetry}>
            Retry
          </Button>
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default Failure
