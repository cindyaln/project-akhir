import { createStore } from "vuex";
import login from "./modules/login";
import auth from "./modules/auth";
import brands from "./modules/brands";
import categories from "./modules/categories";
import product from "./modules/product";
import register from "./modules/register";

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
       
     
    },
});

export default store;  