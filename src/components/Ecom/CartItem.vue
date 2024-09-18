<template>
  <div class="cart-item flex justify-between items-center max-h-64 overflow-auto">
    <!--Image and Details-->
    <div class="flex gap-8 pb-10 items-center">
      <img class="w-20" :src="product.image" :alt="product.title" />
      <div>
        <p class="text-lg w-40">{{ product.title.slice(0, 10) }}...</p>
        <p>{{ product.price }} EGP</p>
      </div>
    </div>
    <!--Quantity-->
    <div class="flex">
      <button @click="updateQuantity(false)" class="w-7 h-7 border-2 border-black text-center">
        -
      </button>
      <p class="p-4 pt-1">{{ quantity }}</p>
      <button @click="updateQuantity(true)" class="w-7 h-7 border-2 border-black text-center">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    quantity() {
      return this.product.quantity
    }
  },
  methods: {
    updateQuantity(increment = true) {
      const finalQuantity = increment ? this.quantity + 1 : this.quantity - 1
      this.$store.commit('updateCartQuantity', { id: this.product.id, quantity: finalQuantity })
    }
  }
}
</script>

<style scoped></style>
