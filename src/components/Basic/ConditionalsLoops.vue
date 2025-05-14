<!--
我们可以通过 v-if 和 v-for 指令条件性地或循环地渲染内容。
-->

<script setup>
import { ref } from 'vue'
import Button from '../Button.vue'
const show = ref(true)
const list = ref([1, 2, 3])
</script>

<template>
  <div class="buttons">
    <Button @click="show = !show">Toggle List</Button>
    <Button @click="list.push(list.length + 1)">Push Number</Button>
    <Button @click="list.pop()">Pop Number</Button>
    <Button @click="list.reverse()">Reverse List</Button>
  </div>
  <div class="content">
    <ul v-if="show && list.length">
        <li v-for="item of list">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List is not empty, but hidden.</p>
    <p v-else>List is empty.</p>
  </div>
</template>

<style scoped>
.buttons{
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 2rem;
    height: 80px;
}
.content {
  width: 60rem;
  margin-top: 1rem;
  text-align: center;
  flex-grow: 2;
  overflow: auto;
}
li {
  list-style: none;
}
</style>