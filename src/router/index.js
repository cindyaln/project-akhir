import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";

import store from "../store";
import Home from "../views/Home.vue";
import Chekeout from "../views/Chekeout.vue";
import SingleProduk from "../views/SingleProduk.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import Brands from "../views/Brands.vue";
import Categories from "../views/Categories.vue";
import SingleBrands from "../views/SingleBrands.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Profile2 from "../views/Profile2.vue";
import Produk from "../views/Produk.vue";



const routes = [

    {
        path: "/",
        name: "Home",
        component: Home,
       
    },

    {
        path: "/chekout",
        name: "Chekout",
        component: Chekeout,
       
    },

    {
        path: "/login",
        name: "Login",
        component: Login,
        
    },

    {
        path: "/register",
        name: "Register",
        component: Register,
        
    },

    

    
    {
        path: "/singleproduk",
        name: "SingleProduk",
        component: SingleProduk,
       
    },

    {
        path: "/cart",
        name: "Cart",
        component: Cart,
       
    },

    

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
       
    },


    {
        path: "/brands",
        name: "Brands",
        component: Brands,
       
    },

    {
        path: "/categories",
        name: "Categories",
        component: Categories,
       
    },

    {
        path: "/brands/:id",
        name: "SingleBrands",
        component: SingleBrands,
       
    },

    {
        path: "/profile",
        name: "Profile",
        component: Profile,
       
    },

    {
        path: "/profile2",
        name: "Profile2",
        component: Profile2,
       
    },

    {
        path: "/produk",
        name: "Produk",
        component: Produk,
       
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