<template>
  <NavBar />
  <Home />
  <Cart />
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
  }
}
</script>

<style></style>
