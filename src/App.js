import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import LoginForm from './components/LoginForm'
import ThemeContext from './context/ThemeContext'
import {LightTheme, DarkTheme} from './theme'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: true}

  onToggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const activeTheme = isDark ? DarkTheme : LightTheme
    return (
      <ThemeContext.Provider
        value={{isDark, onToggleTheme: this.onToggleTheme}}
      >
        <ThemeProvider theme={activeTheme}>
          <Switch>
            <Route path="/login" component={LoginForm} />
          </Switch>
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }
}

export default App
