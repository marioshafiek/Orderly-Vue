<template>
  <div>
    <div
      v-if="visible"
      class="cart-drawer fixed right-0 top-[60px] w-full lg:w-[420px] bg-white shadow-lg flex flex-col z-50 p-6 h-full"
    >
      <!-- Heading Section -->
      <div class="cart-header border-b pb-4 mb-4 flex justify-between">
        <h2 class="text-4xl font-semibold text-gray-800 text-center">Items</h2>
        <div class="flex gap-4">
          <button
            @click="animateButton"
            class="border-2 border-black p-1 w-[100px]"
            :class="{ 'animate-scale': isAnimating }"
          >
            Clear Items
          </button>
        </div>
      </div>
      <!-- Item Section -->
      <div class="cart-items flex-grow">
        <CartItemList />
        <div class="pt-10">
          <!-- Pay Section -->
          <button class="w-full py-3 border-2 border-black w-[200px]">PAY 40 EGP</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartItemList from './CartItemList.vue'

export default {
  components: {
    CartItemList
  },
  props: {
    visible: {
      type: Boolean,
      default: false
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
