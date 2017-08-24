import React from 'react'
import PropTypes from 'prop-types'

function myFunction(hoho) {
    alert(hoho)
}

const Row = ({onClick, code, company, price}) =>
  (
    <div>
      <span>{code}</span>
      <span>{company}</span>
      <span>{price}</span>
      <li onClick={onClick}>Click me</li>
    </div>
)

Row.propTypes = {
  onClick: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Row
