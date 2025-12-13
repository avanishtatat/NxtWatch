import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
`

export const HomeContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideoContent = styled.div`
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
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`

export const BannerContent = styled.div`
  width: 60%;
`

export const BannerImg = styled.img`
  width: 140px;
  height: 35px;
  @media screen and (min-width: 768px) {
    width: 210px;
    height: 60px;
  }
`
export const BannerTitle = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
`

export const GetButton = styled.button`
  color: #1e293b;
  border: 1px solid #1e293b;
  height: 40px;
  widht: 120px;
  background-color: transparent;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
`

export const InputContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.inputBorder};
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-left: 20px;
  }
`

export const Input = styled.input`
  height: 45px;
  border: none;
  flex-grow: 1;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.inputColor};
  padding-left: 20px;
  padding-right: 20px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const SearchButton = styled.button`
  width: 15%;
  height: 45px;
  border: none;
  color: #616e7c;
  background-color: ${props => props.theme.searchButtonBgColor};
  cursor: pointer;
`

export const VideoList = styled.ul`
  list-style-type: none;
  padding-left: 0%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideos = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoVideoImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.theme.color};
  font-weight: 500;
  text-align: center;
`

export const Description = styled.p`
  width: 80%;
  font-family: 'Roboto';
  color: #616e7c;
  font-size: 18px;
  text-align: center;
`

export const RetryButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
