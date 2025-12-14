import {Link} from 'react-router-dom'
import styled from 'styled-components/macro'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const Image = styled.img`
  width: 575px;
  height: 220px;
  object-fit: cover;
  display: block;
  overflow: hidden;
  margin-bottom: 10px;
  flex-grow: 1;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`

export const VideoContent = styled.div`

display: flex; 
padding-left: 20px ;
padding: right: 20px;
@media screen and (min-width: 576px){
    width: 40%;
    flex-grow: 1;
}
@media screen and (min-width: 768px){
    width: 45%; 
}
`

export const Profile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoDescription = styled.div`
  margin-top: 0%;
  padding-top: 2px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    margin-left: 10px;
  }
`
export const Title = styled.h1`
  margin-top: 0%;
  padding-top: 2px;
  color: ${props => props.theme.title};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const VideoStatus = styled.div`
  margin-top: 0%;
  display: flex;
  align-items: center;
  color: #616e7c;
  font-family: 'Roboto';
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const StatusText = styled.p`
  margin-top: 0%;
  font-size: 16px;
  margin-right: 22px;
  @media screen and (min-width: 576px) {
    margin-right: 18px;
  }
`

export const ViewList = styled.ul`
  list-style-type: disc;
  padding-left: 0%;
  display: flex;
  align-items: center;
`

export const List = styled.li`
  @media screen and (min-width: 576px) {
    list-style: none;
    padding-left: 0%;
    margin-right: 5px;
  }
`
