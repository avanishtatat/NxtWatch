import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  FormCard,
  Image,
  Form,
  InputContainer,
  Label,
  Input,
  ShowPassword,
  Checkbox,
  CheckboxLabel,
  LoginButton,
  ErrorText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    user: {username: '', password: ''},
    isChecked: false,
    isFailed: false,
    errorMsg: '',
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangePassword = event => {
    const {name, value} = event.target
    this.setState(prevState => ({user: {...prevState.user, [name]: value}}))
  }

  onChangeUsername = event => {
    const {name, value} = event.target
    this.setState(prevState => ({user: {...prevState.user, [name]: value}}))
  }

  onSubmitForm = async event => {
    const {history} = this.props
    event.preventDefault()
    const {user} = this.state
    const loginApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }
    try {
      const response = await fetch(loginApi, options)
      const data = await response.json()
      if (response.ok) {
        const jwtToken = data.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        history.replace('/')
      } else {
        this.setState({isFailed: true, errorMsg: data.error_msg})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {user, isChecked, isFailed, errorMsg} = this.state
          const {isDark} = value
          const logoUrl = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer>
              <FormCard isDark={isDark}>
                <Image alt="website logo" src={logoUrl} />
                <Form onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <Label htmlFor="username" isDark={isDark}>
                      USERNAME
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      isDark={isDark}
                      value={user.username}
                      onChange={this.onChangeUsername}
                      name="username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type={isChecked ? 'text' : 'password'}
                      placeholder="Password"
                      isDark={isDark}
                      value={user.password}
                      onChange={this.onChangePassword}
                      name="password"
                    />
                  </InputContainer>
                  <ShowPassword>
                    <Checkbox
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onClickCheckbox}
                    />
                    <CheckboxLabel htmlFor="checkbox" isDark={isDark}>
                      Show Password
                    </CheckboxLabel>
                  </ShowPassword>
                  <LoginButton type="submit">Login</LoginButton>
                  {isFailed && <ErrorText>*{errorMsg}</ErrorText>}
                </Form>
              </FormCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
