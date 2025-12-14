import styled from 'styled-components/macro'

export const VideoItemDetail = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`

export const VideoDetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const VideoContents = styled.div`
  order: -1;
  height: 78vh;
  width: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    order: 0;
    height: 100vh;
  }
`
