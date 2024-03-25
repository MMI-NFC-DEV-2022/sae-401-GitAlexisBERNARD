<script setup lang="ts">
import { supabase } from '@/supabase'
import { ref } from 'vue'
const FilmFavoriData = ref()
const props = defineProps<{
  max?: number
}>()
const {
  data: { user }
} = await supabase.auth.getUser()

const { data: FilmFavori, error: ErrorFilmFavori } = await supabase
  .from('FilmFavori')
  .select('id_film,FILM(Titre,url_images)')
  .eq('id_user', user!.id)

console.log('Erreur film favori', ErrorFilmFavori)
console.log('Film favori', FilmFavori)
</script>
<template>
  <div class="flex overflow-auto ml-5">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3">
      <li v-for="(nFILM, index) in FilmFavori" :key="index" class="snap-start w-[40vw]">
        <RouterLink
          :to="{
            name: 'films-id',
            params: { id: nFILM.id_film }
          }"
          class="block"
        >
        
          <img v-if="nFILM.FILM?.url_images" :src="nFILM.FILM.url_images" alt="nFILM.Titre" class="rounded-xl" />
          <p class="font-Spline font-medium text-center text-[16px]">{{ nFILM.FILM?.Titre }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
