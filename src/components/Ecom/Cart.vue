<template>
  <div>
    <div
      v-if="isCartOpen"
      class="cart-drawer pb-[100px] fixed right-0 top-[70px] w-full lg:w-[420px] bg-white shadow-lg flex flex-col z-50 p-6 h-full lg:border-l-2 border-black"
    >
      <!-- Heading Section -->
      <div class="cart-header border-b pb-4 mb-4 flex justify-between">
        <h2 class="text-4xl font-semibold text-gray-800 text-center">ITEMS</h2>
        <div class="flex gap-4">
          <button
            @click="clearCartAction"
            class="border-2 border-black p-1 w-[100px]"
            :class="{ 'animate-scale': isAnimating }"
          >
            CLEAR
          </button>
        </div>
      </div>
      <!-- Item Section -->
      <div class="cart-items flex-grow overflow-scroll">
        <CartItemList />
      </div>
      <div class="pt-2">
        <!-- Pay Section -->
        <button
          @click="payButton"
          class="w-full py-3 font-bold text-2xl border-2 border-black w-[200px]"
        >
          PAY {{ cartTotalPrice }} EGP
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
  computed: {
    // Getter from store
    isCartOpen() {
      return this.$store.getters.isCartOpen
    },
    toggleCart() {
      this.$store.commit('toggleCart')
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    }
  },
  methods: {
    clearCart() {
      this.$store.commit('clearCart')
    },
    clearCartAction() {
      this.isAnimating = true
      setTimeout(() => {
        this.isAnimating = false
        this.clearCart()
      }, 300)
    },
    payButton() {
      this.clearCart()
      this.showAlert()
      this.toggleCart()
    },
    showAlert() {
      this.$swal({
        title: 'Task is done!!!',

        imageUrl: 'https://media.filfan.com/NewsPics/FilfanNew/large/335097_0.JPG',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'image'
      })
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
