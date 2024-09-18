//Mutation For Set Products
//Set Products From the Api
export default {
  setProducts: (state, products) => {
    state.products = products
  },
  setLoadingTrue: (state) => {
    state.loading = true
  },
  setLoadingFalse: (state) => {
    state.loading = false
  }
}
