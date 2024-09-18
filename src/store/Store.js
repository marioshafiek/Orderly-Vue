import { createStore } from 'vuex'
import products from './modules/ProductsStore/index.js'
import cart from './modules/CartStore/index.js'

export default createStore({
  modules: {
    products,
    cart
  }
})
