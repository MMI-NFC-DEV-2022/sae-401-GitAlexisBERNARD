<script setup lang="ts">
import { supabase } from '@/supabase'
const { data: Genre, error } = await supabase.from('GENRE').select('*')
</script>
<template>
  <div
    class="flex overflow-auto ml-5 items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3"
  >
    <RouterLink to="/genre/all" class="block ml-5">
      <button class="px-4 py-1 font-Spline font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
        Tout
      </button>
    </RouterLink>
    <div
      v-for="nGenre in Genre"
      :key="nGenre.id"
      class="px-4 py-1 font-Spline font-medium text-[16px] rounded-xl bg-[#E3E8F2]"
    >
      <RouterLink
        :to="{
          name: 'films-genre-id',
          params: { id: nGenre.id }
        }"
        class="block"
      >
        <button class="font-Spline font-medium text-center text-[16px]">{{ nGenre.Nom }}</button>
      </RouterLink>
    </div>
  </div>
</template>
