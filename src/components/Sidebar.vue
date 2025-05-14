<template>
  <div class="sidebar-container">
    <div class="sidebar-top">
      vue官方的例子
    </div>
    
    <div class="sidebar-category">
      <span class="category-title">Basic</span>
      <div class="menu-items">
        <Button 
          v-for="item in basicData" 
          :key="item.path"
          :active="item.path === route.path"
          @click="handleClick(item)"
        >
          {{ item.name }}
        </Button>
      </div>
    </div>
    
    <div class="sidebar-category">
      <span class="category-title">Practical</span>
      <div class="menu-items">
        <Button 
          v-for="item in practicalData" 
          :key="item.path"
          :active="item.path === route.path"
          @click="handleClick(item)"
        >
          {{ item.name }}
        </Button>
      </div>
    </div>
    
    <div class="sidebar-category">
      <span class="category-title">7 GUIs</span>
      <div class="menu-items">
        <Button 
          v-for="item in GUIsData" 
          :key="item.path"
          :active="item.path === route.path"
          @click="handleClick(item)"
        >
          {{ item.name }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import { useRoute, useRouter } from "vue-router";

type Category = "Basic" | "Practical" | "7 GUIs";

interface Menu {
  name: string;
  path: string;
  type: Category;
}

const data: Menu[] = [
  { name: "Hello World", path: "/basic-1", type: "Basic" },
  { name: "Handling User Input", path: "/basic-2", type: "Basic" },
  { name: "Attribute Bindings", path: "/basic-3", type: "Basic" },
  { name: "Conditionals and Loops", path: "/basic-4", type: "Basic" },
  { name: "Form Bindings", path: "/basic-5", type: "Basic" },
  { name: "Simple Component", path: "/basic-6", type: "Basic" },
  { name: "Markdown Editor", path: "/practical-1", type: "Practical" },
  { name: "Fetching Data", path: "/practical-2", type: "Practical" },
  {
    name: "Grid with Sort and Filter",
    path: "/practical-3",
    type: "Practical",
  },
  { name: "Tree View", path: "/practical-4", type: "Practical" },
  { name: "SVG Graph", path: "/practical-5", type: "Practical" },
  { name: "Modal with Transitions", path: "/practical-6", type: "Practical" },
  { name: "List with Transitions", path: "/practical-7", type: "Practical" },
  { name: "TodoMVC", path: "/practical-8", type: "Practical" },
  { name: "Counter", path: "/gui-1", type: "7 GUIs" },
  { name: "Temperature Converter", path: "/gui-2", type: "7 GUIs" },
  { name: "Flight Booker", path: "/gui-3", type: "7 GUIs" },
  { name: "Timer", path: "/gui-4", type: "7 GUIs" },
  { name: "CRUD", path: "/gui-5", type: "7 GUIs" },
  { name: "Circle Drawer", path: "/gui-6", type: "7 GUIs" },
  { name: "Cells", path: "/gui-7", type: "7 GUIs" },
];

const basicData = data.filter((item) => item.type === "Basic");
const practicalData = data.filter((item) => item.type === "Practical");
const GUIsData = data.filter((item) => item.type === "7 GUIs");

const router = useRouter();
const route = useRoute();

const handleClick = (menu: Menu) => {
  router.push(menu.path);
};
</script>

<style scoped>
.sidebar-container {
  width: 240px;
  height: 100vh;
  background-color: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 1rem;
  overflow-y: auto
}

.sidebar-top {
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1rem;
}

.sidebar-category {
  margin-bottom: 1.5rem;
}

.category-title {
  font-weight: bold;
  color: #475569;
  margin-bottom: 0.5rem;
  display: block;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>