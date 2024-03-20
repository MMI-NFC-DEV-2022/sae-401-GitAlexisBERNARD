<script setup lang="ts">
import { supabase } from '@/supabase'
const UnScenariste = defineProps<{
  id_scenariste: string
  max?: number
}>()
const { data: UnFilmScenarise, error: ErrorUnFilmScenarise } = await supabase
  .from('FilmScenarise')
  .select(`id_film,FILM(Titre,url_images)`)
  .eq('id_scenariste', UnScenariste.id_scenariste)
console.log(UnFilmScenarise)
console.log(UnScenariste.id_scenariste)
if (ErrorUnFilmScenarise) {
  console.error(ErrorUnFilmScenarise)
}
</script>
<template>
  <div class="flex overflow-auto ml-5">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3">
      <li
        v-for="UnFilm in UnFilmScenarise"
        :key="UnFilm.id_film ?? undefined"
        class="snap-start w-[40vw]"
      >
        <RouterLink
          :to="{
            name: 'films-id',
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
