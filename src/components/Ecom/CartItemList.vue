<template>
  <div class="flex flex-col gap-10 max-h-screen">
    <div v-if="cartItems.length > 0">
      <CartItem v-for="item in inCartProducts" :key="item.id" :product="item.product" />
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'

export default {
  components: {
    CartItem
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    },
    allProducts() {
      return this.$store.getters.allProducts
    },
    inCartProducts() {
      //Array of Products in the cart
      const Items = []
      //Match ids in the cart with products
      this.cartItems.map((cartItem) => {
        const product = this.allProducts.find((product) => product.id === cartItem.id)
        if (product) {
          product.quantity = cartItem.quantity
          Items.push({ product })
        }
      })
      return Items
    }
export default {
  components: {
    CartItem
  }
}
</script>

<style></style>
