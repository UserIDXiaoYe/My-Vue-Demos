<template>
  <div class="custom-alert" v-show="isVisible">
    <div class="alert-content">
      <p class="alert-message">{{ message }}</p>
      <button class="alert-button" @click="closeAlert">确定</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
.custom-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  padding: 20px;
  border-radius: 5px;
}

.alert-content {
  text-align: center;
}

.alert-message {
  margin-bottom: 10px;
}

.alert-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 3px;
  cursor: pointer;
}
</style>