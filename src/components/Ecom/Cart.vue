<template>
  <button @click="handleClick">
    <div class="w-10 mt-2">
      <div class="text-sm text-center absolute right-7 top-4">1</div>
      <img class="w-9" src="../../assets/Cart.svg" alt="CartItem" />
    </div>
  </button>
  <CartDrawer :visible="isCartVisible" @update:visible="isCartVisible = $event" />
</template>

<script>
import CartDrawer from './CartDrawer.vue'
export default {
  components: {
    CartDrawer
  },
  data() {
    return {
      isCartVisible: false
    }
  },
  methods: {
    handleClick() {
      this.isCartVisible = !this.isCartVisible
    }
  }
}
</script>

<style scoped></style>
