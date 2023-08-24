<template>
    <div>
        <div class="font-sans text-base text-gray-900 sm:px-10">
  <div class="text-base text-gray-900">
    <div class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div class="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
        <h1 class="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
        <div class="text-lg sm:text-xl xl:text-xl">
          <div class="text-gray-900">
            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
    <form class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
      <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your e-mail:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email"  /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="subject">Subject:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject" /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="message">Message:</label><textarea class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message" ></textarea></div>
      <div class="flex items-center">
        <div class="flex-1"></div>
        <router-link to="/" class="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</router-link>
      </div>
    </form>
    <div class="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
      <div class="">
        <p class="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
        <p class="mb-4">Friday: 08:00 - 15:00</p>
        <p class="mb-4">Weekend: Closed</p>
        <p class="mb-4">
          Email:
          <a href="#" class="font-semibold underline">support@apps.io</a>
        </p>
        <p class="mb-4">
          Phone:
          <a href="#" class="font-semibold underline">+46 (0) 10-32 32 322</a>
        </p>
        <hr class="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
        <p class="mb-4">Org.no: 63452-2832</p>
        <p class="mb-4">VAT no: 32353</p>
      </div>
    </div>
  </div>
</div>
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