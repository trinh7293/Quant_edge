import React from 'react'
import PropTypes from 'prop-types'

function myFunction(hoho) {
    alert(hoho)
}


const Row = ({ code, company, price, percentChangeAmount}) => {
  let color = () => {
    return {
      color: (percentChangeAmount > 0) ? 'green' : 'red'
    }
  }
  return(
    <tr>
      <td>{code}</td>
      <td>{company}</td>
      <td>{price}</td>
      <td style= {color()}>{percentChangeAmount}</td>
      <td style= {color()}>{price*percentChangeAmount/100}</td>
    </tr>
  )
}

Row.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Row
