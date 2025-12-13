import styled from 'styled-components/macro'

export const Container = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
`

export const Image = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.theme.color};
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

export const Button = styled.button`
  width: 120px;
  height: 45px;
  background-color: #4f46e5;
  border: none;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
`
