<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <ProductCard v-for="(product, index) in products" :key="index" :item="product" />
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
      products: [
        {
          title: 'Product 1',
          price: '20 EGP',
          image:
            'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
        },
        {
          title: 'Product 2',
          price: '30 EGP',
          image: 'https://via.placeholder.com/400x400'
        },
        {
          title: 'Product 3',
          price: '50 EGP',
          image: 'https://via.placeholder.com/400x400'
        }
      ]
    }
  }
}
</script>

<style></style>
