const filter = (state='SHOW_ALL', action) => {
  switch(action.type){
    case 'set_filter':
      return action.filter
    default:
      return state
  }
}

export default filter
