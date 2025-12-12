import {IoIosClose} from 'react-icons/io'
import {SidebarContainer} from './styledComponents'

const Sidebar = props => {
  const {isMobile} = props

  return (
    <SidebarContainer isMobile={isMobile}>
      {isMobile && <IoIosClose />}
      <p>Home</p>
    </SidebarContainer>
  )
}

export default Sidebar
