import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.navBgColor};
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export const MenuItem = styled(Link)`
  text-decoration: none;
`

export const LinkContainer = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
  list-style-type: none;
  padding-left: 0%;
`

export const LinkItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 2px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  background-color: ${props =>
    props.isActive ? props.theme.menuBgColor : 'transparent'};
  border-radius: ${props => (props.isActive ? '8px' : '0px')};
  padding: ${props => (props.isActive ? '35px' : '30px')};
`

export const LinkText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.theme.menuColor};
`

export const ContactContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 30px;
`

export const Heading = styled.div`
  color: ${props => props.theme.title};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 18px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Image = styled.img`
width: 35px; 
height; 35px;
margin-right: 10px;
`

export const Description = styled.p`
  width: 80%;
  color: ${props => props.theme.title};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 18px;
`

export const MobileLinkContainer = styled.div`
  background-color: ${props => props.theme.menuBgColor};
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
