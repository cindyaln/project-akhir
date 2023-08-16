import { createStore } from "vuex";
import login from "./modules/login";
import auth from "./modules/auth";


const store = createStore ({
    state: {
        isLoading: false,
    },
    modules: {

        login,
        auth,
       
     
    },
});

export default store;  