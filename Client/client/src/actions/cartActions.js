export const addToCartAction = (product) => {
  return {
    type: 'add-to-cart',
    product: product,
    payload : product._id,
  }
}

export const removeFromCartAction = (product) => {
  return {
    type: 'remove-from-cart',
    product: product,
    payload : product._id,
  }
}

export const removeAllFromCartAction = () => {
  return {
    type: 'remove-all-from-cart',
    
    
  }
}

export const increment = (product) => {
  return {
    
    type: 'increment',
    payload : product._id,
    product: product,
  }
}