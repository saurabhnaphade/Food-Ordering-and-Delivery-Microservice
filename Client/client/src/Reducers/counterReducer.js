const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state+1
    case 'decrement':
      if(state > 0){
      return state - 1
      }
      else{
        state=0
        return state
      }
    default:
      return state
  }
}

export default counterReducer

// action.product.name.
// action.product.name.
// action.product.name.
// action.product.name.
// action.product.name.
// action.product.name.