import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`

export const NotFoundBody = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const NotFoundContent = styled.div`
  width: 100%;
  height: 78vh;
  order: -1;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    order: 0;
    height: 100vh;
  }
`

export const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
`

export const Image = styled.img`
  width: 75%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.theme.title};
  font-weight: 500;
  text-align: center;
`

export const Description = styled.p`
  width: 80%;
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 20px;
  text-align: center;
`
