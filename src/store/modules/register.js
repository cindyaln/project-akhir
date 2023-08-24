import axios from "axios";

const register = {
    namespaced: true,
    state: {
        registerData: [],
    },
    getters: {
        getregister: (state) => state.registerData,
    },
    actions: {
        async fetchRegister({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/users/7"
                );
                commit("SET_REGISTER", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_REGISTER(state, register) {
            state.kategoriData = register;
        },
    },
};

export default register;