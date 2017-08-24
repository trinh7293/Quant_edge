const lists = (state=[], action) => {
  switch(action.type){
    case 'jump':
      return state.map(item =>
        {
          return{...item, price: item.price*2}
        }
      )
    default:
      return state
  }
}

export default lists
