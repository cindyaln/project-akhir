import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import store from "../store";
import Home from "../views/Home.vue";




const routes = [

    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true },
    },

    {
        path: "/",
        name: "Home",
        component: Home,
    },

    
  
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
        next("/"); // redicet to home
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login"); // redicet to home
    } else {
        next();
    }
});

export default router; 