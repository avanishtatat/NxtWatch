import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const Video = styled(Link)`
  text-decoration: none;
`

export const VideoList = styled.li`
  margin-bottom: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: ${props => (props.varient === 'trending' ? '90%' : '320px')};
    display: flex;
    flex-direction: ${props =>
      props.varient === 'trending' ? 'row' : 'column'};
    margin: ${props =>
      props.varient === 'trending' ? '0 auto 40px' : '0 20px 20px 0'};
  }
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 240px;
    width: ${props => (props.varient === 'trending' ? '40%' : '100%')};
  }
`

export const VideoContent = styled.div`
  display: flex;
  align-item: flex-start;
  padding-left: 15px;
  padding-right: 10px;
`

export const Profile = styled.img`
  margin-right: 15px;
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    display: ${props => (props.varient === 'trending' ? 'none' : 'inline')};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  @media screen and (min-width: 768px) {
    line-height: ${props => (props.varient === 'trending' ? '1.5' : '1')};
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.theme.color};
  font-weight: 500;
  margin-top: 0%;
`

export const Channel = styled.div`
  display: flex;
  color: #616e7c;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0%;
  }
`

export const Name = styled.p`
  margin-top: 0%;
  font-family: 'Roboto';
  font-size: 16px;
  margin-right: 10px;
`

export const ViewContainer = styled.ul`
  margin-top: 0%;
  padding-top: 0%;
  line-height: 0.2;
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 0%;
`

export const View = styled.p`
  margin-top: 0%;
  padding-top: 0%;
  font-family: 'Roboto';
  font-size: 15px;
`

export const TimeSpan = styled.p`
  margin-top: 0%;
  padding-top: 0%;
  font-family: 'Roboto';
  font-size: 15px;
`
