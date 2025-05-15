<!--
跟 Vue 说 Hello World！
-->

<script setup>
import { ref } from 'vue'

// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const message = ref('Hello World!')
</script>

<template>
  <div class="flex justify-center items-center h-[100%] w-[100%]">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out hover:text-[#42b883]"
    >
      {{ message }}
    </h1>
  </div>
</template>
<style scoped>
</style>