<template>
  <button @click="handleClick">
    <div class="w-8">
      <div class="w-1">1</div>
      <img class="w-8" src="../../assets/Cart.svg" alt="CartItem" />
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
