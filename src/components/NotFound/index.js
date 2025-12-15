import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  NotFoundContainer,
  NotFoundBody,
  NotFoundContent,
  Container,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImageUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer>
          <Header />
          <NotFoundBody>
            <Sidebar />
            <NotFoundContent>
              <Container>
                <Image src={notFoundImageUrl} alt="not found" />
                <Heading>Page Not Found</Heading>
                <Description>
                  We are sorry, the page you requested could not be found.
                </Description>
              </Container>
            </NotFoundContent>
          </NotFoundBody>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
