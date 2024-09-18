// mutations
export default {
  Set_Cart_Open(state, isOpen) {
    state.isCartOpen = isOpen // Set the cart state
  },
  toggle_Cart(state) {
    state.isCartOpen = !state.isCartOpen // Toggle the cart state
  }
}
