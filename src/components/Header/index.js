import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {IoIosClose, IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  Navbar,
  Image,
  NavItems,
  ThemeButton,
  IconButton,
  LogoutButton,
  Profile,
  Modal,
  Title,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  MenuModal,
  CloseButton,
  LinkContainer,
  MenuLink,
  LinkItem,
  LinkText,
} from './styledComponents'

class Header extends Component {
  state = {menuVisible: false}

  onClickConfirm = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderLogoutPopup = close => (
    <Modal>
      <Title>Are you sure, you want to logout</Title>
      <ButtonContainer>
        <CancelButton type="button" onClick={close}>
          Cancel
        </CancelButton>
        <ConfirmButton type="button" onClick={this.onClickConfirm}>
          Confirm
        </ConfirmButton>
      </ButtonContainer>
    </Modal>
  )

  renderHamBurgerMenu = () => {
    const {location} = this.props
    const activePath = location.pathname
    return (
      <MenuModal>
        <CloseButton type="button" onClick={this.onClickHamMenu}>
          <IoIosClose size={40} />
        </CloseButton>
        <LinkContainer>
          <MenuLink to="/">
            <LinkItem isActive={activePath === '/'}>
              <IoMdHome
                size={25}
                color={activePath === '/' ? '#ff0000' : '#616e7c'}
              />
              <LinkText>Home</LinkText>
            </LinkItem>
          </MenuLink>
          <MenuLink to="/trending">
            <LinkItem isActive={activePath === '/trending'}>
              <HiFire
                size={25}
                color={activePath === '/trending' ? '#ff0000' : '#616e7c'}
              />
              <LinkText>Trending</LinkText>
            </LinkItem>
          </MenuLink>
          <MenuLink to="/gaming">
            <LinkItem isActive={activePath === '/gaming'}>
              <SiYoutubegaming
                size={25}
                color={activePath === '/gaming' ? '#ff0000' : '#616e7c'}
              />
              <LinkText>Gaming</LinkText>
            </LinkItem>
          </MenuLink>
          <MenuLink to="/saved-videos">
            <LinkItem isActive={activePath === '/saved-videos'}>
              <MdPlaylistAdd
                size={25}
                color={activePath === '/saved-videos' ? '#ff0000' : '#616e7c'}
              />
              <LinkText>Saved Videos</LinkText>
            </LinkItem>
          </MenuLink>
        </LinkContainer>
      </MenuModal>
    )
  }

  onClickHamMenu = () => {
    this.setState(prevState => ({menuVisible: !prevState.menuVisible}))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onToggleTheme} = value
          const onClickTheme = () => {
            onToggleTheme()
          }
          const {menuVisible} = this.state

          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <>
              <Navbar>
                <Link to="/">
                  <Image alt="website logo" src={logoUrl} />
                </Link>
                <NavItems>
                  <ThemeButton onClick={onClickTheme} data-testid="theme">
                    {isDark ? (
                      <BsFillBrightnessHighFill size={30} />
                    ) : (
                      <FaMoon size={30} />
                    )}
                  </ThemeButton>

                  <IconButton type="button" onClick={this.onClickHamMenu}>
                    <GiHamburgerMenu size={30} />
                  </IconButton>

                  <Profile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <Popup
                    modal
                    trigger={
                      <IconButton>
                        <FiLogOut size={30} />
                      </IconButton>
                    }
                    className="popup-content"
                  >
                    {close => this.renderLogoutPopup(close)}
                  </Popup>
                  <Popup
                    modal
                    trigger={<LogoutButton>Logout </LogoutButton>}
                    className="popup-content"
                  >
                    {close => this.renderLogoutPopup(close)}
                  </Popup>
                </NavItems>
              </Navbar>
              {menuVisible && this.renderHamBurgerMenu()}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
