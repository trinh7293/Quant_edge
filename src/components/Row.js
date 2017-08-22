import React from 'react'

class Row extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.code}</td>
        <td>{this.props.company}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default Row
