// getters
export default {
  isCartOpen: (state) => state.isCartOpen, // Get the cart state
  cartItems(state) {
    return state.cart
  },
  cartTotal(state) {
    return state.cart.reduce((total, product) => total + product.quantity, 0)
  },
  cartTotalPrice(state) {
    const number = state.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
    const rounded = number.toFixed(2)
    return rounded
  }
}
