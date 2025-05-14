<template>
<div class="all-content">
    <div class="content">
      <aside><Sidebar/>></aside>
      <article>
        <RouterView/>
      </article>
    </div>
    <footer>FOOTER</footer>
</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.all-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex: auto;
  display: flex;
}
.content article {
  flex: auto;
  background-color: aquamarine;
}
</style>