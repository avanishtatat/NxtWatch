import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onToggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDark, onToggleTheme: this.onToggleTheme}}
      >
        <Switch>
          <Route path="/login" component={LoginForm} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
