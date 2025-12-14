import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import LoginForm from './components/LoginForm'
import ThemeContext from './context/ThemeContext'
import {LightTheme, DarkTheme} from './theme'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import VideoStatusProvider from './context/VideoStatusProvider'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  onToggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const activeTheme = isDark ? DarkTheme : LightTheme
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          onToggleTheme: this.onToggleTheme,
        }}
      >
        <VideoStatusProvider>
          <ThemeProvider theme={activeTheme}>
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
            </Switch>
          </ThemeProvider>
        </VideoStatusProvider>
      </ThemeContext.Provider>
    )
  }
}

export default App
