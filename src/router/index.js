import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoListView from '../views/TodoListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodoListView
  }
]

const router = new VueRouter({
  routes
})

export default router
