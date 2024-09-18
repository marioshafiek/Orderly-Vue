<template>
  <ProductCardList />
</template>

<script>
import ProductCardList from '@/components/products/ProductCardList.vue'

export default {
  components: {
    ProductCardList
  },
  computed: {
    // Getter from store
    isCartOpen() {
      return this.$store.getters.isCartOpen
    }
  },
  watch: {
    // Watch for changes in isCartOpen
    isCartOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }
}
</script>

<style></style>
