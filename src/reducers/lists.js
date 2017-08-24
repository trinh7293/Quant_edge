const lists = (state=[], action) => {
  switch(action.type){
    case 'jump':
      return state.map(item =>
        {
          return{...item, price: item.price*(0.95 + 0.1*Math.random())}
        }
      )
    default:
      return state
  }
}

export default lists
