<template>
  <div class="navbar fixed top-0 left-0 right-0 bg-white z-50 lg:border-b-2">
    <div class="flex justify-between mr-5 mt-3 ml-5">
      <div class="mt-1 w-6">
        <h1 class="text-3xl">SHOP</h1>
      </div>
      <!--Cart Button-->
      <div class="flex text-center mb-2">
        <button @click="toggleCart">
          <div class="w-10 mt-3">
            <div class="text-sm text-center absolute right-7 top-4">2</div>
            <img class="w-9" src="@/assets/Cart.svg" alt="CartItem" />
          </div>
        </button>
      </div>
    </div>
  </div>
  <div class="pt-[70px]"></div>
</template>

<script>
export default {
  methods: {
    toggleCart() {
      this.$store.commit('toggleCart')
    }
  }
}
</script>

<style scoped>
/*I will use this transition when tha cart Increase or Descrease*/
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.animate-scale {
  animation: scale 0.3s ease-in-out;
}
</style>
