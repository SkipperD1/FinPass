import { createRouter, createWebHistory } from "vue-router";

import Index from "../components/pages/Index.vue"
import SignUp from '../components/pages/signUp/SignUp.vue'
import SignIn from '../components/pages/SignIn.vue';
import Onboarding from '../components/pages/Onboarding.vue';
import SignUp1 from '../components/pages/signUp/signUp1.vue';
import SignUp2 from '../components/pages/signUp/signUp2.vue';
import SignUp3 from '../components/pages/signUp/signUp3.vue';
import Congrats from '../components/pages/Congrats.Vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/signUp',
        component: SignUp
    },
    {
        path: '/signIn',
        component: SignIn
    },
    {
        path: '/onboarding',
        component: Onboarding
    },
    {
        path: '/signUp1',
        component: SignUp1
    },
    {
        path: '/signUp2',
        component: SignUp2
    },
    {
        path: '/signUp3',
        component: SignUp3
    },
    {
        path: '/congrats',
        component: Congrats
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router