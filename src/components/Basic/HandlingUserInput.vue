<script setup>
import { ref, watch} from 'vue'
import Button from '../Button.vue'
import CustomAlert from '../Alert.vue'

const SavedMessage = localStorage.getItem('savedMessage') || 'Hello World!'
const message = ref(SavedMessage)

// 监听消息变化并保存到本地存储
watch(message, (newValue) => {
  localStorage.setItem('savedMessage', newValue)
})

function reverseMessage() {
  // 通过其 .value 属性
  // 访问/修改一个 ref 的值。
  message.value = message.value.split('').reverse().join('')
}
const customAlert = ref();

const notify = () => {
  customAlert.value.showAlert('链接跳转被阻止');
};
// function notify() {
//   alert('navigation was prevented.')
// }
function resetMessage(){
    message.value = "Hello World!"
}
</script>

<template>

<div class="flex flex-col gap-3">
    <div class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl cursor-pointer hover:scale-125 transition-all duration-500 ease-in-out hover:text-[#79ddea]">{{ message }}</div>

  <!--
    绑定到一个方法/函数。
    这个 @click 语法是 v-on:click 的简写。
  -->
  <div class="flex justify-center gap-3 items-end">
      <Button @click="reverseMessage">Reverse Message</Button>

      <!-- 也可以写成一个内联表达式语句 -->
      <Button @click="message += '!'">Append "!"</Button>
      <Button @click="resetMessage">Reset</Button>
        <!--
        Vue 也为一些像 e.preventDefault() 和 e.stopPropagation()
        这样的常见任务提供了修饰符。
      -->
      <a href="https://vuejs.org" @click.prevent="notify" class="link-a underline">
        A link with e.preventDefault()
      </a>
      <CustomAlert ref="customAlert" />
  </div>
</div>
</template>

<style scoped>
.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>