<template>
<div class="all-content">
    <div class="content">
      <aside><Sidebar/></aside>
      <article class="right">
        <div class="vue-content">
          <Transition name="fade">
            <RouterView/>
          </Transition>
        </div>
      </article>
    </div>
</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="less" scoped>
/* 定义淡入淡出动画 */
.fade-enter-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

/* 禁用淡出 */
.fade-leave-active {
  display: none;
}
.all-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: auto;
    display: flex;
    article {
      flex: 1;
    }
    .right{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .vue-content{
        height: 80vh;
        width: 70vw;
        text-align: center;
        border: 2px solid black;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>