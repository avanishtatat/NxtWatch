import styled from 'styled-components/macro'

export const SavedVideosContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
`

export const SavedVideosBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SavedVideosContent = styled.div`
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

export const NoVideos = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 75%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.theme.labelColor};
  text-align: center;
`

export const ListContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
  }
`
