//Store For Products
export default {
  //initial state for Products
  state: {
    products: []
  },
  //getters to access state data
  //Get All Products
  getters: {
    allProducts: (state) => state.products
  },
  //Set Products From the Api
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    }
  },
  //Fetch All Products
  //takes commit as an argument from the "Vuex context".
  //Converted fetching here to "try and catch".
  actions: {
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
}
