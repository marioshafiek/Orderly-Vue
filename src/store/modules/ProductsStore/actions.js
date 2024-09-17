//Actions for Products
//Fetch All Products
//takes commit as an argument from the "Vuex context".
//Converted fetching here to "try and catch".
export default {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
      commit('setProducts', products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
}
