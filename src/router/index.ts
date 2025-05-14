import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      redirect:"/basic-1"
    },
    {
      path:"/basic-1",
      name: "HelloWorld",
      component: () => import("../components/Basic/HelloWorld.vue"),
    }
  ],
})

export default router
