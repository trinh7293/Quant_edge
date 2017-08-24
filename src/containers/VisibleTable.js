import { connect } from 'react-redux'
import Table from '../components/Table'
import { jump } from '../actions'

const mapStateToProps = state => {
  return{
    lists: state.lists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeClick: () => {
      dispatch(jump())
    }
  }
}

const VisibleTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)

export default VisibleTable
