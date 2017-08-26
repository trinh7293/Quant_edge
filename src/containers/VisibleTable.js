import { connect } from 'react-redux'
import Table from '../components/Table'
import { jump } from '../actions'

function sortTop(arr) {
  return arr.slice(0).sort((a, b) => {
    return b.totalChangeValue - a.totalChangeValue;
  });
}

function sortBot(arr) {
  return arr.slice(0).sort((a, b) => {
    return a.totalChangeValue - b.totalChangeValue;
  });
}

const getVisibleTable = (lists, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return lists
    case 'TOP_GAINERS':
      return sortTop(lists).slice(0, 21)
    case 'TOP_LOOSER':
      return sortBot(lists).slice(0, 21)
  }
}

const mapStateToProps = state => {
  return{
    lists: getVisibleTable(state.lists, state.filter)
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
