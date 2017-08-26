import React from 'react'
import Row from './Row'
import PropTypes from 'prop-types'

class Table extends React.Component {

  render() {
    return(
      <table border='1' width='100%' className='main-table'>
        <tbody>
          <tr>
            <th>Code</th>
            <th>Company</th>
            <th>Price</th>
            <th>Value</th>
            <th>Change</th>
            <th>%Change</th>
            <th>Totalchange</th>
          </tr>
          {this.props.lists.map(list => (
            <Row
              {...list}
            />
          ))}
        </tbody>
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
