<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id_film: string
  max?: number
}>()
const { data: ActeurUnFilm, error: ErrorActeurUnFilm } = await supabase
  .from('FilmActeur')
  .select(`id_acteur,STAR(Nom,Prenom,url_images),FILM(Titre)`)
  .eq('id_film', props.id_film)
console.log(ActeurUnFilm)
</script>
<template>
  <div class="flex overflow-auto ml-5">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3">
      <li
        v-for="UnActeur in ActeurUnFilm"
        :key="UnActeur.id_acteur ?? undefined"
        class="snap-start w-[40vw] rounded-xl"
      >
        <RouterLink
          :to="{
            name: 'films-acteur-id',
            params: { id: UnActeur.id_acteur }
          }"
          class="block"
        >
          <img
            :src="UnActeur.STAR!.url_images ?? undefined"
            :alt="UnActeur.FILM!.Titre ?? undefined"
            class="rounded-xl"
          />
          <p class="font-Spline font-medium text-center text-[16px]">
            {{ UnActeur.STAR!.Nom }} {{ UnActeur.STAR!.Prenom }}
          </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
