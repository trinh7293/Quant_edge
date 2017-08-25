import { connect } from 'react-redux'
import Filter from '../components/Filter'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

const ConnectFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default ConnectFilter
