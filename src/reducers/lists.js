const lists = (state=[], action) => {
  switch(action.type){
    case 'jump':
      return state.map(item =>
        {
          let percentChangeAmount = -5+10*Math.random();
          let newPrice = item.price*(1 + percentChangeAmount/100)
          return{
            ...item,
            totalChangeAmount: item.totalChangeAmount + newPrice - item.price,
            price: newPrice,
            percentChangeAmount: percentChangeAmount,
          }
        }
      )
    default:
      return state
  }
}

export default lists
