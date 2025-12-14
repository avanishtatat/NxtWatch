import styled from 'styled-components/macro'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormCard = styled.div`
  width: 90%;
  background-color: ${props => props.theme.loginBgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  @media screen and (min-width: 768px) {
    width: 45%;
    padding: 60px;
  }
`
export const Image = styled.img`
  width: 140px;
  height: 35px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 45px;
    margin-bottom: 40px;
  }
`

export const Form = styled.form`
  width: 100%;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`

export const Label = styled.label`
  color: ${props => props.theme.labelColor};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const Input = styled.input`
  border: 1px solid ${props => props.theme.inputBorder};
  color: ${props => props.theme.inputColor};
  background-color: transparent;
  height: 45px;
  width: 100%;
  padding-left: 15px;
  font-size: 18px;
  font-family: 'Roboto';
  border-radius: 4px;
  outline: none;
`

export const ShowPassword = styled(InputContainer)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const Checkbox = styled.input`
  transform: scale(1.5);
`

export const CheckboxLabel = styled(Label)`
  color: ${props => props.theme.checkboxLabel};
  font-size: 18px;
  font-weight: 400;
`

export const LoginButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  background-color: #3b82f6;
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 16px;
`
