import type { RouteRecordRaw } from "vue-router";
import NotFound from "@/views/NotFound.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/App.vue"),
  },
  {
    path: "/:notfound(.*)*",
    name: "NotFound",
    component: NotFound,
  }
]