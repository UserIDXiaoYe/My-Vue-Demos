<!--
现在我们将元素的 attribute / property 响应式地绑定到状态上。
这个 :title 语法是 v-bind:title 的简写。
-->

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
const isRed = ref(true)
const color = ref('green')

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}
</script>

<template>
  <p class="first-message">
    <span :title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </p>

  <!--
  除了普通字符串之外，
  class 绑定还特别支持了对象和数组
  -->
  <p :class="{ red: isRed }" @click="toggleRed">
    This should be red... but click me to toggle it.
  </p>

  <!-- 样式绑定也支持对象和数组 -->
  <p :style="{ color }" @click="toggleColor">
    This should be green, and should toggle between green and blue on click.
  </p>
</template>

<style scoped>
p{
    cursor: pointer;
}
.first-message:hover{
    /* font-size: 20px; */
    transform: scale(1.5);
    position: relative;
    transition: all 0.5s;
}
.red {
  color: red;
}
</style>