import { createRouter, createWebHistory } from "vue-router";
import ComfiguratorView from "../views/ComfiguratorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Comfigurator",
      component: ComfiguratorView,
    },
  ],
});

export default router;
