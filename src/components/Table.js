import React from 'react'
import Row from './Row'
import PropTypes from 'prop-types'

const Table = ({lists, onChangeClick}) => (
  <div>
    {lists.map(list => (
      <Row
        {...list}
        onClick={() => onChangeClick()}
        />
    ))}
    <button onClick={() => onChangeClick()}>change</button>
  </div>
  )




Table.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onChangeClick: PropTypes.func.isRequired
}

export default Table
