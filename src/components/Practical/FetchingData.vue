<template>
  <div class="w-full h-full flex flex-col justify-center items-center p-4">
    <h2 class="text-4xl font-bold flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-vue w-12 h-12"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M16.5 4l-4.5 8l-4.5 -8" />
        <path d="M3 4l9 16l9 -16" />
      </svg>
      <span class="pl-2">Latest Vue Core Commits</span>
    </h2>
    
    <div class="flex pt-4 w-full md:w-1/2 justify-around items-center">
      <div class="relative">
        <select 
          v-model="currentBranch"
          class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-base focus:outline-none focus:ring-2 focus:ring-[#42b883] focus:border-transparent w-40"
        >
          <option value="main">main</option>
          <option value="v2-compat">v2-compat</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
      
      <span class="text-xl p-2 flex items-center hover:underline hover:scale-105 cursor-pointer transition-all duration-300">
        Current branch: vuejs/vue@{{ currentBranch }}
      </span>
    </div>
    
    <div class="pt-4 w-full md:w-4/5">
      <ul>
        <div v-if="commits" class="flex flex-col gap-4">
          <li
            v-for="{ html_url, sha, author, commit } in commits"
            class="min-h-20 p-4 border-dotted border-2 border-gray-300 rounded-md hover:scale-[1.02] cursor-pointer transition-all duration-300 bg-white shadow-sm"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div class="flex-1">
                <a
                  class="text-[#42b883] text-lg font-bold hover:underline"
                  :href="html_url"
                  target="_blank"
                >
                  {{ sha.slice(0, 7) }}
                </a>
                - <span class="message">{{ truncate(commit.message) }}</span>
              </div>
              <div class="md:w-48 text-sm md:text-base">
                by
                <span class="text-[#42b883] font-bold hover:underline">
                  <a :href="author?.html_url" target="_blank">{{ commit.author.name }}</a>
                </span>
                at <span class="date">{{ formatDate(commit.author.date) }}</span>
              </div>
            </div>
          </li>
        </div>
        <div
          v-else
          class="w-full h-64 flex justify-center items-center text-3xl md:text-4xl font-bold text-gray-800"
        >
          <span>Loading</span>
          <div class="flex ml-2 space-x-2">
            <div class="w-3 h-3 rounded-full bg-[#42b883] animate-bounce [animation-delay:-0.3s]"></div>
            <div class="w-3 h-3 rounded-full bg-[#42b883] animate-bounce [animation-delay:-0.15s]"></div>
            <div class="w-3 h-3 rounded-full bg-[#42b883] animate-bounce"></div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`;
const branches = ["main", "v2-compat"] as const;

type Branch = (typeof branches)[number];

const currentBranch = ref<Branch>(branches[0]);
const commits = ref<any>(null);

watchEffect(async () => {
  const url = `${API_URL}${currentBranch.value}`;
  // Added timeout to simulate loading
  setTimeout(async () => {
    commits.value = await (await fetch(url)).json();
  }, 2000);
});

function truncate(v: any) {
  const newline = v.indexOf("\n");
  return newline > 0 ? v.slice(0, newline) : v;
}

function formatDate(v: any) {
  return v.replace(/T|Z/g, " ");
}
</script>

<style scoped>
/* No additional styles needed - all handled by Tailwind */
</style>
