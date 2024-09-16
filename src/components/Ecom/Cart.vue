<template>
  <button @click="handleClick">
    <div class="w-10 mt-2">
      <div class="text-sm text-center absolute right-7 top-4">1</div>
      <img class="w-9" src="../../assets/Cart.svg" alt="CartItem" />
    </div>
  </button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('Clicked')
    }
  }
}
</script>
<style></style>
