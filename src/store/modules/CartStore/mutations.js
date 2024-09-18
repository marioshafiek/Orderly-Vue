// mutations
export default {
  toggleCart(state) {
    state.isCartOpen = !state.isCartOpen // Toggle the cart state
  },

  //Cart Products
  //Add to Cart or add more of specified product
  addToCart(state, { id, quantity, price }) {
    const existingProduct = state.cart.find((product) => product.id === id)
    if (existingProduct) {
      existingProduct.quantity += quantity
    } else {
      state.cart.push({ id, quantity, price })
    }
  },

  //Remove from cart
  removeFromCart(state, productId) {
    state.cart = state.cart.filter((product) => product.id !== productId)
  },
  updateCartQuantity(state, { id, quantity }) {
    const product = state.cart.find((product) => product.id === id)

    if (product) {
      //quantity parm is the total quantity
      if (quantity < 1) {
        // Remove the product
        state.cart = state.cart.filter((product) => product.id !== id)
      } else {
        // update the quantity
        product.quantity = quantity
      }
    }
  },

  //Clear the cart
  clearCart(state) {
    state.cart = []
  }
}
