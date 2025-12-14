import styled from 'styled-components/macro'

export const Navbar = styled.nav`
  padding: 20px;
  background-color: ${props => props.theme.navBgColor};
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  margin-left: 10px;
  width: 110px;
  height: 35px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 40px;
    margin-left: 30px;
  }
`

export const NavItems = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border: none;
  text-align: right;
  cursor: pointer;
  margin-right: 10px;
`

export const IconButton = styled.button`
  color: ${props => props.theme.color};
  background-color: transparent;
  border: none;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  color: ${props => props.theme.logoutButton};
  border: 1px solid ${props => props.theme.logoutButton};
  background-color: transparent;
  font-family: 'Roboto';
  height: 35px;
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 0px 20px;
`

export const Profile = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  height: 40px;
  width: 40px;
  margin: 0px 20px;
`

export const Modal = styled.div`
  background-color: ${props => props.theme.modalBgColor};
  height: 200px;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.theme.title};
  font-size: 22px;
  margin-bottom: 34px;
`
export const ButtonContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CancelButton = styled.button`
  font-family: 'Roboto';
  height: 40px;
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  background-color: transparent;
  color: #7e858e;
  border: 1px solid #7e858e;
  cursor: pointer;
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`

export const MenuContainer = styled.ul`
  list-style-type: none;
`

export const MenuItem = styled.li`
  font-family: 'Roboto';
`
