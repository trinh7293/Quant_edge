import React from 'react'
import ConnectFilter from '../containers/ConnectFilter'

const Header = () => (
  <p>
    Show:
    {' '}
    <ConnectFilter filter="SHOW_ALL">
      All
    </ConnectFilter>
    {', '}
    <ConnectFilter filter="SHOW_TOP">
      TOP
    </ConnectFilter>
    {', '}
    <ConnectFilter filter="SHOW_BOTTOM">
      BOTTOM
    </ConnectFilter>
  </p>
)

export default Header
