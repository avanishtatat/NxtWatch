import styled from 'styled-components/macro'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`

export const TrendingBody = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const TrendingContent = styled.div`
  width: 100%;
  height: 78vh;
  order: -1;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    order: 0;
    height: 100vh;
  }
`

export const Banner = styled.div`
  padding: 20px 30px;
  background-color: ${props => props.theme.bannerBg};
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 25px 50px;
  }
`

export const ImageContainer = styled.div`
  background-color: ${props => props.theme.bannerImg};
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.theme.title};
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const TrendingVideos = styled.ul`
  list-style-type: none;
  padding-left: 0%;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin: 40px;
  }
`
