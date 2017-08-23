import React from 'react'
import Row from './Row'
import PropTypes from 'prop-types'

const Table = ({lists}) => (
  <table>
    {lists.map(list => (
      <Row {...list} />
    ))}
  </table>
)


Table.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Table
