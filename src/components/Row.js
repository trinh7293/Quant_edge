import React from 'react'
import PropTypes from 'prop-types'

function myFunction(hoho) {
    alert(hoho)
}

const Row = ({ code, company, price}) =>
  (
    <tr>
      <td>{code}</td>
      <td>{company}</td>
      <td>{price}</td>
    </tr>
)

Row.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Row
