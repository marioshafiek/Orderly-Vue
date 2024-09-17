// actions
export default {
  openCart({ commit }) {
    commit('Set_Cart_Open', true) // open the cart
  },
  closeCart({ commit }) {
    commit('Set_Cart_Open', false) //close the cart
  },
  toggleCart({ commit }) {
    commit('Toggle_Cart') //toggle the cart state
  }
}
