import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Sidebar from '../Sidebar'
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
  MenuContainer,
  MenuItem,
} from './styledComponents'

const Header = props => {
  const onClickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  const renderLogoutPopup = close => (
    <Modal>
      <Title>Are you sure want to logout</Title>
      <ButtonContainer>
        <CancelButton type="button" onClick={close}>
          Cancel
        </CancelButton>
        <ConfirmButton type="button" onClick={onClickConfirm}>
          Confirm
        </ConfirmButton>
      </ButtonContainer>
    </Modal>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, onToggleTheme} = value
        const onClickTheme = () => {
          onToggleTheme()
        }

        const logoUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <Navbar>
            <Link to="/">
              <Image alt="website logo" src={logoUrl} />
            </Link>
            <NavItems>
              <ThemeButton onClick={onClickTheme}>
                {isDark ? (
                  <BsFillBrightnessHighFill size={30} />
                ) : (
                  <FaMoon size={30} />
                )}
              </ThemeButton>
              <IconButton>
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
                {close => renderLogoutPopup(close)}
              </Popup>
              <Popup
                modal
                trigger={<LogoutButton>Logout </LogoutButton>}
                className="popup-content"
              >
                {close => renderLogoutPopup(close)}
              </Popup>
            </NavItems>
          </Navbar>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
