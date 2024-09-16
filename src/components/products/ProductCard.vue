<template>
  <div class="border-2 border-black w-[400px] h-[500px] flex flex-col justify-between3">
    <div>
      <div class="relative">
        <div
          class="w-20 h-10 bg-black text-white absolute right-2 top-2 flex items-center justify-center"
        >
          {{ item.price }}
        </div>
      </div>
      <!-- Used here [400px] instaed of h-100 -->
      <img :src="item.image" alt="Item" class="w-full h-[400px]" />
    </div>
    <div class="p-4 flex justify-between">
      <p class="text-lg font-semibold mb-2">{{ item.title }}</p>
      <button class="border-2 border-black w-20">Add +</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
