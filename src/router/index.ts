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
    },
    {
      name: "Handling User Input", 
      path: "/basic-2",
      component: () => import("../components/Basic/HandlingUserInput.vue")
    },
    {
      name: "Attribute Bindings", 
      path: "/basic-3",
      component: () => import("../components/Basic/AttributeBindings.vue")
    },
    {
      name: "Conditionals and Loops", 
      path: "/basic-4",
      component: () => import("../components/Basic/ConditionalsLoops.vue")
    },
    {
      name: "Form Bindings", 
      path: "/basic-5",
      component: () => import("../components/Basic/FormBindings.vue")
    },
    {
      name: "Simple Component", 
      path: "/basic-6",
      component: () => import("../components/Basic/SimpleComponent.vue")
    }
  ],
})

export default router
