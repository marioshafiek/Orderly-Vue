<template>
  <NavBar />
  <Home />
  <Cart :visible="isCartOpen" />
</template>
<script>
import NavBar from './components/shared/NavBar.vue'
import Home from './pages/Home.vue'
import Cart from './components/Ecom/Cart.vue'

export default {
  components: {
    NavBar,
    Home,
    Cart
  },
  computed: {
    // Getter from store
    isCartOpen() {
      console.log(this.$store.getters.isCartOpen)
      return this.$store.getters.isCartOpen
    }
  }
}
</script>

<style></style>
