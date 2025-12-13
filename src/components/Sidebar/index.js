import {withRouter} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SidebarContainer,
  MenuItem,
  LinkContainer,
  LinkItem,
  LinkText,
  ContactContainer,
  Heading,
  Container,
  Image,
  Description,
  MobileLinkContainer,
} from './styledComponents'

const Sidebar = props => {
  const {location} = props
  const activePath = location.pathname
  return (
    <SidebarContainer>
      <LinkContainer>
        <MenuItem to="/">
          <LinkItem isActive={activePath === '/'}>
            <IoMdHome
              size={25}
              color={activePath === '/' ? '#ff0000' : '#616e7c'}
            />
            <LinkText>Home</LinkText>
          </LinkItem>
        </MenuItem>
        <MenuItem to="/trending">
          <LinkItem isActive={activePath === '/trending'}>
            <HiFire
              size={25}
              color={activePath === '/trending' ? '#ff0000' : '#616e7c'}
            />
            <LinkText>Trending</LinkText>
          </LinkItem>
        </MenuItem>
        <MenuItem to="/gaming">
          <LinkItem isActive={activePath === '/gaming'}>
            <SiYoutubegaming
              size={25}
              color={activePath === '/gaming' ? '#ff0000' : '#616e7c'}
            />
            <LinkText>Gaming</LinkText>
          </LinkItem>
        </MenuItem>
        <MenuItem to="/saved-videos">
          <LinkItem isActive={activePath === '/saved-videos'}>
            <MdPlaylistAdd
              size={25}
              color={activePath === '/saved-videos' ? '#ff0000' : '#616e7c'}
            />
            <LinkText>Saved Videos</LinkText>
          </LinkItem>
        </MenuItem>
      </LinkContainer>
      <ContactContainer>
        <Heading>CONTACT US</Heading>
        <Container>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linkedin logo"
          />
        </Container>
        <Description>
          Enjoy! Now to see Your channels and recommendations
        </Description>
      </ContactContainer>
      <MobileLinkContainer>
        <MenuItem to="/">
          <IoMdHome
            size={30}
            color={activePath === '/' ? '#ff0000' : '#616e7c'}
          />
        </MenuItem>
        <MenuItem to="/trending">
          <HiFire
            size={30}
            color={activePath === '/trending' ? '#ff0000' : '#616e7c'}
          />
        </MenuItem>
        <MenuItem to="/gaming">
          <SiYoutubegaming
            size={30}
            color={activePath === '/gaming' ? '#ff0000' : '#616e7c'}
          />
        </MenuItem>
        <MenuItem to="saved-videos">
          <MdPlaylistAdd
            size={30}
            color={activePath === '/saved-videos' ? '#ff0000' : '#616e7c'}
          />
        </MenuItem>
      </MobileLinkContainer>
    </SidebarContainer>
  )
}

export default withRouter(Sidebar)
