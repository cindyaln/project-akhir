<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <router-link to="/" class="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">꧁༺૮เɳ∂ყ༻꧂</span>
          </router-link>




          
          <div class="flex md:order-2">
          <div v-if="isAuthenticated">
            <CartBadgeComponent/>
            <router-link to="/cart" class="relative inline-flex items-center mr-4 px-5">
              

             
            </router-link>

           
          </div>
          <div v-if="isAuthenticated">
            <div >
              <a @click="logout"
                class="text-white  cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 -top-9 md:mr-0  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</a>
            </div>

          </div>
          <div v-else>
            <a href="/login"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>


          
          
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                  class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                      <router-link to="/"
                          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">~♥~♥~♥     ℍ𝕆𝕄𝔼
                      </router-link>
                  </li>

                  <li>
                      <router-link to="/produk"
                          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">ℙℝ𝕆𝕌ℂ𝕋
                      </router-link>
                  </li>

                  <li>
                      <router-link to="/brands"
                          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">𝔹ℝ𝔸ℕ𝔻𝕊 
                      </router-link>
                  </li>

                  <li>
                      <router-link to="/categories"
                          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">ℂ𝔸𝕋𝔼𝔾𝕆ℝ𝕀𝔼𝕊   
                      </router-link>
                  </li>

                  <li>
                      <router-link to="/contact"
                          class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                          aria-current="page">ℂ𝕆ℕ𝕋𝔸ℂ𝕋     ~♥~♥~♥~
                      </router-link>
                  </li>
                  
                  
              </ul>
          </div>
      </div>
  </nav>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import CartBadgeComponent from './CartBadgeComponent.vue';
export default {
  computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: { CartBadgeComponent }
};
</script>