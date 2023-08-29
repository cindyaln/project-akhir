import { createWebHistory, createRouter } from "vue-router";

import Login from "../views/Login.vue";

import store from "../store";
import Home from "../views/Home.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Cart from "../views/Cart.vue";
import Contact from "../views/Contact.vue";
import Brands from "../views/Brands.vue";
import Categories from "../views/Categories.vue";
import SingleBrands from "../views/SingleBrands.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Profile2 from "../views/Profile2.vue";
//import Product from "../views/Product.vue";
import Produk from "../views/Produk.vue";
import PageOrder from "../views/PageOrder.vue";



const routes = [

    {
        path: "/",
        name: "Home",
        component: Home,
       
    },

    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue"),
        meta: { requireLogin: true },
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
        path: "/singleproduct",
        name: "SingleProduct",
        component: SingleProduct,
       
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

    {
        path: "/order/:orderCode",
        name: "PageOrder",
        component: PageOrder,
        props: true,
      }
    
  
    
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

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  }

export default router; 