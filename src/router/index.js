import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";
import Product from "../views/Product.vue";
import store from "../store";
import Home from "../views/Home.vue";
import Chekeout from "../views/Chekeout.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";



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
        meta: { requiresLogin: true },
    },

    {
        path: "/product",
        name: "Product",
        component: Product,
        meta: { requiresLogin: true },
    },

    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
        meta: { requiresLogin: true },
    },

    {
        path: "/cart",
        name: "Cart",
        component: Cart,
        meta: { requiresLogin: true },
    },

    {
        path: "/chekout",
        name: "Chekout",
        component: Chekeout,
        meta: { requiresLogin: true },
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: { requiresLogin: true },
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