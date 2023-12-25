import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import store from '../store';
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    // Requires authentication
    //meta: {requiresAuth: true}
    
  },
  {
    // Add post view route
    
    path: '/add-post',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
