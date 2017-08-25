import React from 'react'
import Row from './Row'
import PropTypes from 'prop-types'

class Table extends React.Component {

  render() {
    return(
      <table width='100%'>
        <tr>
          <td>code</td>
          <td>company</td>
          <td>price</td>
          <td>volume</td>
          <td>value</td>
          <td>change</td>
          <td>%change</td>
          <td>totalChangeValue</td>
        </tr>
        {this.props.lists.map(list => (
          <Row
            {...list}
            />
        ))}
      </table>
    );
  }
}

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
