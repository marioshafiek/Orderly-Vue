<template>
  <div>
    <div
      v-if="visible"
      class="cart-drawer fixed inset-y-0 right-0 w-[300px] lg:w-[410px] bg-white shadow-lg flex flex-col z-50 p-6"
    >
      <!--Heading Section-->
      <div class="cart-header border-b pb-4 mb-4 flex justify-between">
        <h2 class="text-2xl font-semibold text-gray-800 text-center">Items</h2>
        <div class="flex gap-4">
          <button
            @click="animateButton"
            class="border-2 border-black p-1 w-[100px]"
            :class="{ 'animate-scale': isAnimating }"
          >
            Clear Items
          </button>
          <button
            class="close-btn w-full w-[50px] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            @click="closeDrawer"
          >
            X
          </button>
        </div>
      </div>
      <!--Item section-->
      <div class="cart-items flex-grow">
        <CartItemList />
      </div>
      <div>
        <!--Pay Section-->
        <p class="text-lg text-gray-600">Total: $100</p>
        <button
          class="btn-primary w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Checkout
        </button>
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
    closeDrawer() {
      //Emit to close the drawer @update:visible
      this.$emit('update:visible', false)
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
