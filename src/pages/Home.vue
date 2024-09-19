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
  }
}
</script>

<style></style>
