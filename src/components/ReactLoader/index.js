import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import {LoaderContainer} from './styledComponents'

const ReactLoader = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <LoaderContainer className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            height="50"
            color={isDark ? '#ffffff' : '#3b82f6'}
            width="50"
          />
        </LoaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default ReactLoader
