<template>
  <div class="border-2 border-black w-[300px] h-[350px] flex flex-col justify-between">
    <div>
      <div class="relative">
        <div
          class="w-20 h-10 bg-black text-white absolute right-2 top-2 flex items-center justify-center"
        >
          {{ product.price }}
        </div>
      </div>
      <img
        :src="product.image"
        alt="Item"
        class="w-[200px] h-[200px] ml-10 mt-7 object-contain flex justify-center items-center"
      />
    </div>
    <div class="p-4 flex justify-between">
      <p class="text-lg font-semibold mb-2 h-20 w-40">{{ product.title.slice(0, 20) }}...</p>
      <button
        @click="animateButton"
        :class="{ 'animate-scale': isAnimating }"
        class="border-2 border-black w-20 h-8"
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
