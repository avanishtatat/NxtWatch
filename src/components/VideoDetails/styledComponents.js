import styled from 'styled-components/macro'

export const ReactPlayerContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    inset: 0;
  }

  .react-player > div {
    padding-top: 0 !important;
  }

  @media screen and (min-width: 768px) {
    margin: 40px 25px;
    height: 500px;
    width: 95%;
  }
`

export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => props.theme.title};
  font-weight: 500;
  font-size: 20px;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    padding: 0 10px 0 25px;
  }
`

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 25px;
    margin-right: 40px;
  }
`

export const ViewContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #616e7c;
  margin-right: 15px;
`

export const ButtonContainer = styled.div`
  padding-top: 0%;
  margin-top: 0%;
  display: flex;
  align-items: center;
`

export const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Button = styled.button`
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 0%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  outline: none;
`

export const ButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  margin-right: 15px;
  font-weight: 500;
`

export const HrLine = styled.hr`
  margin: 0 20px;
  @media screen and (min-width: 768px) {
    margin: 0 25px;
  }
`

export const ChannelDetailContainer = styled.div`
  margin: 20px 20px 0px 20px;
  display: flex;
  @media screen and (min-width: 768px) {
    margin: 25px 20px 0px 20px;
  }
`

export const Profile = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

export const ChannelDetailText = styled.div`
  line-height: 1;
`

export const ChannelName = styled.p`
  margin-top: 0%;
  color: ${props => props.theme.color};
  font-family: 'Roboto';
  font-size: 18px;
`

export const ChannelSub = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 17px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  padding-left: 20px;
  color: ${props => props.theme.inputColor};
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-left: 100px;
    margin-bottom: 60px;
  }
`
