import React from 'react'
import Row from './Row'
import PropTypes from 'prop-types'

class Table extends React.Component {
  componentDidMount() {
    let change = () => this.props.onChangeClick();
    setInterval(change,1000)
  }
  render() {
    return(
      <div>
        {this.props.lists.map(list => (
          <Row
            {...list}
            />
        ))}
      </div>
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
