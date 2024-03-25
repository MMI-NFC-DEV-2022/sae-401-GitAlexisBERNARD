<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { supabase } from '@/supabase'
import Iconuser from './icons/iconuser.vue'
import SearchBar from './SearchBar.vue'
import { user } from '@/supabase'
console.log('user value', user.value)

const activeMenu = ref(false)

function closeMenu() {
  activeMenu.value = false
}
</script>
<template>
  <header
    class="z-10 flex w-full translate-y-0 items-center justify-between bg-primary-darkbleu px-6 py-2 transition-all duration-300 ease-in-out lg:py-0"
  >
    <RouterLink to="/" class="lg:flex justify-center hidden">
      <img src="/public/images/logo.png" alt="logo" class="w-[5%] min-w-8" />
    </RouterLink>
    <div v-if="user" class="lg:hidden block">
      <RouterLink to="/userprofile"
        ><img src="/public/images/user.jpg" class="h-10 w-10 rounded-full object-cover"
      /></RouterLink>
    </div>
    <div v-else class="lg:hidden block">
      <RouterLink to="/connexion"><Iconuser class="w-8 h-8 lg:w-12 lg:h-12" /></RouterLink>
    </div>
    <SearchBar class="hidden lg:block" />
    <RouterLink to="/" class="flex justify-center lg:hidden">
      <img src="/public/images/logo.png" alt="logo" class="w-[5%] min-w-8" />
    </RouterLink>
    <div class="flex items-center gap-4 lg:flex-row-reverse">
      <button
        class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
        @click="activeMenu = !activeMenu"
      >
        <div
          class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
          :class="{ 'translate-y-[9px] rotate-45 !bg-black': activeMenu }"
        ></div>
        <div
          class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
          :class="{ '!bg-black opacity-0': activeMenu }"
        ></div>
        <div
          class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
          :class="{ '-translate-y-[9px] -rotate-45 !bg-black': activeMenu }"
        ></div>
      </button>

      <nav
        class="lg:bg-white invisible opacity-0 fixed inset-0 h-screen w-screen bg-white text-2xl text-black transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:w-auto lg:items-center lg:tracking-wide lg:text-black lg:opacity-100"
        :class="{ '!visible opacity-100': activeMenu }"
        v-scroll-lock="activeMenu"
      >
        <ul
          class="mt-[25vh] lg:ml-16 gap-8 text-black lg:m-0 lg:flex flex flex-col lg:flex-row justify-center items-center"
        >
          <li>
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px]"
              to="/"
              @click="closeMenu"
              >Accueil</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px]"
              to="/films"
              @click="closeMenu"
              >Films</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px]"
              to="/films/nouveaute"
              @click="closeMenu"
              >Nouveauté</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px]"
              to="/acteur"
              @click="closeMenu"
              >Acteurs</RouterLink
            >
          </li>
          <li v-if="!user">
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px] hidden lg:block ml-16"
              to="/connexion"
              @click="closeMenu"
              >connexion</RouterLink
            >
          </li>
          <li v-if="!user">
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px] hidden lg:block px-4 py-2 bg-[#F5C754] rounded-xl"
              to="/inscription"
              @click="closeMenu"
              >inscription</RouterLink
            >
          </li>
          <li v-if="user">
            <RouterLink
              class="menu-link lg:text-black font-Spline font-normal text-[26px] hidden lg:block px-4 py-2"
              to="/userprofile"
              @click="closeMenu"
              ><img src="/public/images/user.jpg" class="h-10 w-10 -object-cover"
            /></RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
