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
    },
    {
      name: "Markdown Editor", 
      path: "/practical-1",
      component: () => import("../components/Practical/MarkdownEditor.vue")
    },
    {
      name: "Fetching Data", 
      path: "/practical-2",
      component: () => import("../components/Practical/FetchingData.vue")
    },
    {
      name: "Grid with Sort and Filter",
      path: "/practical-3",
      component: () => import("../components/Practical/GridSortFilter.vue")
    },
    {
      name: "Tree View", 
      path: "/practical-4",
      component: () => import("../components/Practical/TreeView.vue")
    },
    {
      name: "SVG Graph", 
      path: "/practical-5",
      component: () => import("../components/Practical/SVGGraph.vue")
    },
    {
      name: "Modal with Transitions", 
      path: "/practical-6",
      component: () => import("../components/Practical/ModalTransitions.vue")
    },
    {
      name: "TodoMVC", 
      path: "/practical-8",
      component: () => import("../components/Practical/TodoMVC.vue")
    }
  ],
})

export default router
