<template>
    <div v-if="getProduk == undefined">Loading....</div>
    <div v-else>
      <div class="grid md:grid-cols-4 gap-8  mt-10 pl-5">
        <div v-for="product in getProduk.slice(0, 12)" :key="product.slug">
  
          <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-gray shadow-md">
            <a href="#">
              <img class="h-50 rounded-t-lg object-cover w-full" src="https://i.pinimg.com/474x/ac/29/d6/ac29d63ddc4c061096c57c7d3b26906f.jpg" alt="product image" />
            </a>
            <span
              class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-slate-900">{{ product.name }}</h5>
              </a>
              <div class="mt-2.5 mb-5 flex items-center">
                <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
              </div>
              <div class="flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-slate-900">Rp.{{ product.base_price }}</span>
  
                </p>
              </div>
              <div>
                <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }"
                  class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Details
                </router-link>
              </div>
            </div>
          </div>
  
        </div>
      </div>
  
    </div>



    <footer class="bg-gray-50">
  <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
    <div class="max-w-sm">
      <div class="mb-6 flex h-12 items-center space-x-2">
        <span class="text-2xl font-bold">Bel<span class="text-blue-600">Air</span>.</span>
      </div>
      <div class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a officia ea expedita!</div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
      <div class="text-gray-500">
        35 Remida Heights, <br />
        45 Street, <br />
        South Caroline, US
      </div>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
      <nav aria-label="Footer Navigation" class="text-gray-500">
        <ul class="space-y-3">
          <li><a class="hover:text-blue-600 hover:underline" href="#">Pricing</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Demo</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Press</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Support Hub</a></li>
          <li><a class="hover:text-blue-600 hover:underline" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="">
      <div class="mt-4 mb-2 font-medium xl:mb-4">Subscribe to our Newsletter</div>
      <div class="flex flex-col">
        <div class="mb-4">
          <input type="email" class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="Enter your email" />
          <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
      <div class="">© 2022 BelAir | All Rights Reserved</div>
      <div class="">
        <a class="" href="#">Privacy Policy</a>
        <span>|</span>
        <a class="" href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters('product', ['getProduk']),
    },
    methods: {
      ...mapActions('product', ['fetchProduk']),
    },
    created() {
      this.fetchProduk();
    }
  }
  </script>