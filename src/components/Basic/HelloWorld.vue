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
  <div class="helloWorld">{{ message }}</div>
  <h1>{{ message }}</h1>
</template>
<style scoped>
.helloWorld{
  font-size: 48px;
}
@layer base {
  h1 {
    font-size: var(--text-2xl);
    color: var(--text-red-500);
  }
  h2 {
    font-size: var(--text-xl);
  }
}
</style>