<template>
  <div class="w-full h-full flex p-6 gap-6">
    <!-- Input Section -->
    <div class="flex-1 h-full">
      <div class="h-full border rounded-lg shadow-sm">
        <div class="border-b p-4">
          <h2 class="text-lg font-semibold">MarkDown Input</h2>
        </div>
        <div class="h-[85%] p-4">
          <textarea
            :value="input"
            @input="update"
            class="w-full h-full outline-none resize-none border-dashed border-2 p-4 rounded"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Output Section -->
    <div class="flex-1">
      <div class="h-full border rounded-lg shadow-sm">
        <div class="border-b p-4">
          <h2 class="text-lg font-semibold">MarkDown Render</h2>
        </div>
        <div class="h-[85%] p-4">
          <div
            v-html="output"
            class="w-full h-full overflow-y-auto outline-none markdown-body p-4 rounded text-left"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "github-markdown-css/github-markdown.css";
import { marked } from "marked";
import { debounce } from "lodash-es";
import { ref, computed } from "vue";

// Initialize with default markdown
const input = ref<string>(`# Welcome to Markdown Editor

## Features
- **Real-time** preview
- GitHub-flavored markdown
- Clean, responsive design

\`\`\`javascript
// Example code block
function hello() {
  console.log('Hello Markdown!');
}
\`\`\`
`);

// Compute markdown output
const output = computed(() => marked(input.value));

// Debounce input updates
const update = debounce((e: Event) => {
  input.value = (e.target as HTMLTextAreaElement).value;
}, 100);
</script>

<style scoped>
/* Additional styles if needed */
</style>
