export const jump = () => {
  return {
    type: 'jump'
  }
}

export const setFilter = filter => {
  return {
    type: 'set_filter',
    filter
  }
}
