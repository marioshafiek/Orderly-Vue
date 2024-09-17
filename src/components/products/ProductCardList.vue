<template>
  <div class="p-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
      <ProductCard v-for="(product, index) in allProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  computed: {
    //Getter from store
    allProducts() {
      return this.$store.getters.allProducts
    }
  },
  mounted() {
    //Dispatch actions from the store
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style></style>
