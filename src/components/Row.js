import React from 'react'
import PropTypes from 'prop-types'

function myFunction(hoho) {
    alert(hoho)
}


const Row = ({ code, company, price, volume, percentChangePrice, totalChangeValue}) => {
  const color = (value) => {
    return {
      color: (value > 0) ? 'green' : 'red'
    }
  }
  const changePrice = price*percentChangePrice/100,
  value = Math.round(price*volume);
  return(
    <tr >
      <td>{code}</td>
      <td>{company}</td>
      <td>{price.toFixed(2)}</td>
      <td>{volume}</td>
      <td>{value}</td>
      <td style= {color(percentChangePrice)}>{percentChangePrice.toFixed(2)}</td>
      <td style= {color(percentChangePrice)}>{changePrice.toFixed(2)}</td>
      <td style= {color(totalChangeValue)}>{totalChangeValue}</td>
    </tr>
  )
}

Row.propTypes = {
  code: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Row
