import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/pages/Home.vue"
import Create from "../views/pages/Create.vue"
import Tree from "../views/pages/Tree.vue"
import Login from "../views/pages/Login.vue"
import Dashboard from "../views/pages/Dashboard.vue"
import Display from "../views/pages/Display.vue"
//import Register from "../views/pages/Register.vue"

const ifAuthenticated = (to, from, next) => {
    const loggedin = localStorage.getItem('session_token');
    if(loggedin) {
        next()
        return
    }
    next('/login')
}

const routes = [
    { path: "/", component: Home },
    { path: "/Tree/:id", component: Tree, beforeEnter: ifAuthenticated },
    { path: "/Create/:id", component: Create, beforeEnter: ifAuthenticated },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard, beforeEnter: ifAuthenticated },
    { path: "/Display/:id", component: Display }
    //{ path: "/register", component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;