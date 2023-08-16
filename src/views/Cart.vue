<template>
    <div>
        <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>

    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="../images/campuran2.jpg" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">accecories pack</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$259.00</p>

                      <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                          <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                          <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="../images/campuran3.jpg" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">accecories fashion</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$259.00</p>

                      <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          <button class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                          <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                          <button class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">$399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> 408.00</p>
          </div>

          <div class="mt-6 text-center">
            <router-link to="/chekout" type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<hr>
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
    </div>
</template>