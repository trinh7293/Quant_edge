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
    <ConnectFilter filter="SHOW_ASCENDING">
      ASCENDING
    </ConnectFilter>
    {', '}
    <ConnectFilter filter="SHOW_DESCENDING">
      DESCENDING
    </ConnectFilter>
  </p>
)

export default Header
