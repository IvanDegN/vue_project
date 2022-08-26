import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersPage from "@/pages/UsersPage";

Vue.use(VueRouter)

const routes = [
  {
    name: 'users-page',
    path: '/',
    component: UsersPage
  },
  {
    name:'profile-page',
    path: '/user/:id',
    component: () => import('../pages/ProfilePage'),
    props: true
  },
  {
    name: 'albums-page',
    path: '/user/:id/albums',
    component: () => import('../pages/AlbumsPage'),
    props: true
  },
  {
    name: 'posts',
    path: '/user/:id/posts',
    component: () => import('../pages/PostsPage'),
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: '/vue_project/',
  routes
})



export default router
