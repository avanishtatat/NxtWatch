import styled from 'styled-components/macro'

export const SidebarContainer = styled.div`
  width: ${props => (props.isMobile ? '100%' : '30%')};
  border: 1px solid red;
`
