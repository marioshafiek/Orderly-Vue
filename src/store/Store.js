import { createStore } from 'vuex'
import products from './modules/ProductsStore/index.js'

export default createStore({
  modules: {
    products
  }
})
