<template>
  <div class="flex h-screen bg-gray-50 p-6 rounded-3xl">
    <!-- 左侧表单区域 (2/3宽度) -->
    <div class="w-2/3 pr-4">
      <div class="h-full bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col">
        <!-- 标题部分靠左对齐 -->
        <div class="text-left mb-6">
          <h1 class="text-3xl font-bold">Payment Method</h1>
          <p class="text-gray-600 mt-1">Add a new payment method to your account.</p>
        </div>

        <!-- 支付方式选项 -->
        <div class="flex gap-4 mb-6">
          <div 
            v-for="n in 3" 
            :key="n"
            class="w-44 h-28 bg-white border-2 border-gray-200 rounded cursor-pointer"
          ></div>
        </div>

        <!-- 表单区域 (全部靠左对齐) -->
        <div class="space-y-6 flex-1">
          <!-- 姓名输入 -->
        <div class="text-left">
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input 
            type="text" 
            class="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.name" placeholder="First Last"
        >
        </div>

        <!-- 卡号和复选框 -->
        <div class="flex gap-4 items-start">
        <div class="text-left flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input 
            type="text" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="form.cardNum" placeholder=" "
            >
        </div>
        <div class="text-left flex items-center gap-2 mt-6">
            <input type="checkbox" class="h-4 w-4" v-model="form.cardNum">
            <label class="text-sm font-medium text-gray-700">Card CheckNum</label>
        </div>
        </div>

        <!-- 日期和CVV -->
        <div class="flex gap-4 justify-between">
        <div class="text-left">
            <label class="block text-sm font-medium text-gray-700 mb-1">Expires</label>

            <select 
              class="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.selectVal"
            >
              <option value="" disabled selected>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
        </div>
        <div class="text-left">
            <label class="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <select 
              class="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.selectVal2"
            >
              <option value="" disabled selected>Year</option>
              <option 
                v-for="i in 10"
                :key="i"
                :value="`${new Date().getFullYear() + i}`"
              >
                {{ new Date().getFullYear() + i }}
              </option>
            </select>
        </div>
        <div class="text-left">
            <label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input 
            id="cvc"
            type="number" 
            class="w-32 px-3 py-2 border border-gray-300 rounded-md"
            v-model="form.inputVal"
            placeholder="CVC"
            >
        </div>
        </div>   
        </div>
        <Button>Continue</Button> 
      </div>
    </div>

    <!-- 右侧信息区域 (1/3宽度) -->
    <div class="w-1/3 pl-4">
      <div class="h-full bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-3xl font-bold mb-4">Information</h2>
        <div class="w-full bg-white p-4 rounded">
          <!-- 这里可以显示表单数据 -->
          <p class="text-gray-700"> {{ form }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '../Button.vue';
import { ref } from 'vue';
interface FormState {
  payment: string;
  name: string;
  cardNum: string;
  checkNum: boolean;
  selectVal: string;
  selectVal2: string;
  inputVal: number;
}
const form = ref<FormState>({
  payment: "",
  name: "",
  cardNum: "",
  checkNum: false,
  selectVal: "",
  selectVal2: "",
  inputVal: 0,
});

</script>

<style scoped>

</style>
