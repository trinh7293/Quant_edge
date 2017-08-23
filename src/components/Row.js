import React from 'react'
import PropTypes from 'prop-types'

const Row = ({code, company, price}) => (
  <div>
    <tr>
      <td>{code}</td>
      <td>{company}</td>
      <td>{price}</td>
    </tr>
  </div>

)

Row.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Row
