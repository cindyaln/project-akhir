import { createStore } from "vuex";
import login from "./modules/login";
import auth from "./modules/auth";
import brands from "./modules/brands";
import categories from "./modules/categories";
import product from "./modules/product";
import register from "./modules/register";
import cart from "./modules/cart";
import order from "./modules/order";
import user from "./modules/user";

const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {

        login,
        auth,
        brands,
        categories,
        product,
        register,
        cart,
        order,
        user
       
     
    },
});

export default store;  