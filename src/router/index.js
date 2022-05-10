import { createRouter, createWebHistory } from "vue-router";
import About from '../views/About.vue'
import Home from '../views/Home.vue'
const routes = [
    {
        name: 'Home',
        path: '/',
        component:Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory('http://localhost:3000'),
    routes
});

export default router