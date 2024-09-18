<template>
  <div class="flex justify-between items-center">
    <!--Image-->
    <div class="flex gap-8 items-center">
      <img
        class="w-30 h-20"
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <!--Product Data-->
      <div>
        <p>Product 1</p>
        <p>20 EGP</p>
      </div>
    </div>
    <!--Quantity-->
    <div class="flex">
      <button class="w-7 h-7 border-2 border-black text-center">-</button>
      <p class="p-4 pt-1">1</p>
      <button class="w-7 h-7 border-2 border-black text-center">+</button>
    </div>
  </div>
</template>

<script>
export default {
  //Method for decrease and increase
  methods: {
    decreaseQuantity() {},
    increaseQuantity() {}
  }
}
</script>

<style></style>
