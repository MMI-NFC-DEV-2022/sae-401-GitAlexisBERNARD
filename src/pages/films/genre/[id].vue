<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id?: number
}>()
console.log(props.id)
const { data: FILM, error } = await supabase
  .from('FilmGenre')
  .select('GENRE(Nom),FILM(*)')
  .eq('id_genre', props.id)
console.log(FILM)
</script>
<template>
  <h2 class="font-Spline font-medium text-[24px]">Genre {{ FILM[0]?.GENRE.Nom }}</h2>
  <div class="flex overflow-auto ml-5">
    <ul
      class="lg:flex-wrap flex lg:justify-center items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3"
    >
      <li v-for="(nFILM, index) in FILM" :key="index" class="snap-start w-[40vw] lg:w-1/4">
        <RouterLink
          :to="{
            name: 'films-id',
            params: { id: nFILM.FILM.id }
          }"
          class="block"
        >
          <img :src="nFILM.FILM.url_images ?? ''" alt="nFILM.Titre" class="rounded-xl" />
          <p class="font-Spline font-medium text-center text-[16px]">{{ nFILM.FILM.Titre }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
