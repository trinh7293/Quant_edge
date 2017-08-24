import React from 'react'
import PropTypes from 'prop-types'

function myFunction(hoho) {
    alert(hoho)
}

const Row = ({ code, company, price}) =>
  (
    <div>
      <span>{code}</span>
      <span>{company}</span>
      <span>{price}</span>
    </div>
)

Row.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Row
