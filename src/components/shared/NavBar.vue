<template>
  <div class="flex justify-between m-5">
    <div class="mt-1 w-6">
      <h1 class="text-3xl">SHOP</h1>
    </div>
    <div>
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from '../Ecom/Cart.vue'
export default {
  components: {
    Cart
  }
}
</script>

<style></style>
