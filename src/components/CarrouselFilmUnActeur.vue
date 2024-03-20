<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id_acteur: string
  max?: number
}>()
const { data: UnFilmActeur, error: ErrorUnFilmActeur } = await supabase
  .from('FilmActeur')
  .select(`id_film,FILM(Titre,url_images)`)
  .eq('id_acteur', props.id_acteur)
console.log(UnFilmActeur)
</script>
<template>
  <div class="flex w-[100%] overflow-hidden">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth overflow-x-auto">
      <li
        v-for="UnFilm in UnFilmActeur"
        :key="UnFilm.id_film ?? undefined"
        class="snap-start"
      >
        <RouterLink
          :to="{
            name: 'films-acteur-id',
            params: { id: UnFilm.id_film }
          }"
          class="block"
        >
          <img
            :src="UnFilm.FILM!.url_images ?? undefined"
            :alt="UnFilm.FILM!.Titre ?? undefined"
            class="rounded-xl"
          />
          <p class="font-Spline font-medium text-center text-[16px]">
            {{ UnFilm.FILM!.Titre }}
          </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
