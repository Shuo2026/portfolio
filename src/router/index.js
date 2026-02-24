import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import ProjectDetail from "../views/ProjectDetail.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/projects/:slug", name: "projectDetail", component: ProjectDetail }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
