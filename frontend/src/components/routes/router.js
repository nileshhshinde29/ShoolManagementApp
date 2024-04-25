import { createRouter, createWebHistory } from "vue-router"
import Login from "../../components/Login.vue"

let routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router