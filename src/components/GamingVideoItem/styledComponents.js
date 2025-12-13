import styled from 'styled-components/macro'

import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoCard = styled.li`
  width: 220px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 240px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 320px;
  }
`

export const TextContainer = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 0px;
`

export const Title = styled.h1`
  width: 100%;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.color};
`

export const View = styled.p`
  margin-top: 0%;
  line-height: 1.5;
  width: 80%;
  font-family: 'Roboto';
  font-size: 18px;
  color: #616e7c;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
