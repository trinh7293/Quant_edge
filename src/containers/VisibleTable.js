import { connect } from 'react-redux'
import Table from '../components/Table'

const mapStateToProps = state => {
  return{
    lists: state.lists
  }
}

const VisibleTable = connect(
  mapStateToProps,
)(Table)

export default VisibleTable
