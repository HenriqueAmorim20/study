// Arquivo onde é configurado o router
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

// Rotas da aplicação, possui um path, o nome da rota e o component que ela renderiza
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];


// Onde é criado o router de fato, nesse caso são passadas as rotas e um component de histórico
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
