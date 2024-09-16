<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((products) => {
          this.products = products
        })
        .catch((error) => console.error('Error:', error))
    }
  }
}
</script>

<style></style>
