<template>
  <div class="fixed bottom-4 right-4  z-[1000] bg-gray-100 rounded-md shadow-md p-5 border-solid border-gray-200 border-2   w-[35%]  transition-all duration-300 ease-out
  transform hover:scale-105
  animate-[slide-up_0.3s_ease-out]" v-show="isVisible">
    <div class="flex justify-center align-center gap-2 flex-col">
      <p class="alert-message">{{ message }}</p>
      <Button @click="closeAlert" class="inline-block">确定</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';

// 控制弹窗的显示与隐藏
const isVisible = ref(false);
// 弹窗显示的消息
const message = ref('');

// 显示弹窗的方法
const showAlert = (msg) => {
  message.value = msg;
  isVisible.value = true;
};

// 关闭弹窗的方法
const closeAlert = () => {
  isVisible.value = false;
};

// 导出显示弹窗的方法，方便在其他组件中使用
// 
defineExpose({
  showAlert,
});
</script>

<style scoped>
.alert-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;
}
</style>