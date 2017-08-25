const lists = (state=[], action) => {
  switch(action.type){
    case 'jump':
      return state.map(item =>
        {
          let percentChangePrice = -5+10*Math.random()
          let newPrice = item.price*(1 + percentChangePrice/100)
          let newVolume = Math.round(item.volume+(10 + Math.random()*20))
          let oldValue = item.price*item.volume
          let currentChangeValue = Math.round((newPrice*newVolume-oldValue))
          return{
            ...item,
            totalChangeValue: item.totalChangeValue + currentChangeValue,
            percentChangePrice: percentChangePrice,
            price: newPrice,
            volume: newVolume,
          }
        }
      )
    default:
      return state
  }
}

export default lists
