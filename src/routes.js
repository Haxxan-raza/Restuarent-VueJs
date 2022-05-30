import SingUp from './components/SingUp.vue'
import HomeMain from './components/HomeMain.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'
const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeMain
    },
    {
        name: 'SingUp',
        path: '/sing-up',
        component: SingUp
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'AddResto',
        path: '/addresto',
        component: AddResto
    },
    {
        name: 'UpdateResto',
        path: '/updateresto',
        component: UpdateResto
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;