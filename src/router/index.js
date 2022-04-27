import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import WishList from '../views/WishList.vue';
import Articles from '../views/Articles.vue';
import Questions from '../views/Questions.vue';
import Catalog from '../views/Catalog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/wish-list',
    name: 'WishList',
    component: WishList,
  },
  {
    path: '/questions-answers',
    name: 'Q&A',
    component: Questions,
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
