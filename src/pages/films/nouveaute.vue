<script setup lang="ts">
import { supabase } from '@/supabase'
const { data: Film, error } = await supabase.from('FILM').select('*').eq('Nouveauté', true)
if (error) {
  console.error(error)
}
console.log(Film)
</script>
<template>
  <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4 lg:text-[32px]">
    Pages de toutes les nouveautes
  </h2>
  <div class="flex flex-wrap">
    <div v-for="unFilm in Film">
      <RouterLink :to="{ name: 'films-id', params: { id: unFilm.id } }">
        <div class="flex flex-col items-center">
          <img :src="unFilm.url_images ?? ''" :alt="unFilm.Titre" class="rounded-xl max-w-80" />
          <p class="font-Spline font-medium text-center text-[16px]">{{ unFilm.Titre }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
