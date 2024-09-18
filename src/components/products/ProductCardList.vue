<template>
  <div v-if="loadingStatus" class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <ProductCard v-for="(product, index) in allProducts" :key="index" :product="product" />
    </div>
  </div>
  <div v-else>
    <div class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
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
    },
    loadingStatus() {
      console.log(this.$store.getters.isLoading)
      return this.$store.getters.isLoading
    }
  },
  mounted() {
    //Dispatch actions from the store
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style></style>
