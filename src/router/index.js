import { createRouter, createWebHistory } from "vue-router";
import MyView from "../views/MyView.vue";

const routes = [
  {
    path: "/",
    name: "myview",
    component: MyView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
