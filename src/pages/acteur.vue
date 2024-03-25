<script setup lang="ts">
import { supabase } from '@/supabase'
const { data: Acteur, error } = await supabase.from('FilmActeur').select('STAR(*)')
if (error) {
  console.error(error)
}
console.log(Acteur)
</script>
<template>
  <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4 lg:text-[32px]">
    Pages de tout les Stars
  </h2>
  <div class="flex flex-wrap">
    <div v-for="nStar in Acteur">
      <RouterLink :to="{ name: 'films-acteur-id', params: { id: nStar.STAR.id } }">
        <div class="flex flex-col items-center">
          <img
            :src="nStar.STAR.url_images ?? ''"
            :alt="nStar.STAR.Nom"
            class="rounded-xl max-w-80"
          />
          <p v-if="nStar.STAR.Nom" class="font-Spline font-medium text-center text-[16px]">{{ nStar.STAR.Nom }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
