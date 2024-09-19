<template>
  <div class="w-[300px] h-[350px] flex flex-col justify-between">
    <div>
      <div class="relative">
        <div
          class="w-22 p-2 h-10 bg-black text-white absolute right-2 top-2 flex items-center justify-center"
        >
          {{ product.price }} EGP
        </div>
      </div>
      <div class="flex justify-center p-5">
        <img
          :src="product.image"
          alt="Item"
          class="w-[200px] h-[200px] object-contain flex justify-center items-center"
        />
      </div>
    </div>
    <div class="p-4 flex justify-between border-2 border-black h-[50px]items-center">
      <p class="text-lg w-40">{{ product.title.slice(0, 10) }}...</p>
      <button
        @click="addToCart"
        :class="{ 'animate-scale': isAnimating }"
        class="border-2 border-black w-20 h-7 font-semibold"
      >
        Add +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isAnimating: false
    }
  },
  methods: {
    addToCart() {
      // button animation
      this.animateButton()
      // add the product to the cart
      this.$store.commit('addToCart', {
        id: this.product.id,
        quantity: 1,
        price: this.product.price
      })
    },
    animateButton() {
      this.isAnimating = !this.isAnimating
      setTimeout(() => {
        this.isAnimating = false
      }, 300)
    }
  }
}
</script>

<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.animate-scale {
  animation: scale 0.3s ease-in-out;
}
</style>
