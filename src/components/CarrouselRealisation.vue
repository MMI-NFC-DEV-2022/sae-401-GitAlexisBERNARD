<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  id_film: string
  max?: number
}>()
const { data: RealisateurUnFilm, error: ErrorUnFilm } = await supabase
  .from('FilmRealise')
  .select(`id_realisateur,STAR(Nom,Prenom,url_images),FILM(Titre)`)
  .eq('id_film', props.id_film)
  .limit(props.max ?? 100)
console.log(RealisateurUnFilm)
const { data: ScenariserUnFilm, error: ErrorUnFilmscenarise } = await supabase
  .from('FilmScenarise')
  .select(`id_scenariste,STAR(Nom,Prenom,url_images),FILM(Titre)`)
  .eq('id_film', props.id_film)
  .limit(props.max ?? 100)
console.log(ScenariserUnFilm)
</script>
<template>
  <div class="flex w-[100%] overflow-hidden">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth overflow-x-auto">
      <li
        v-for="UnRealisateur in RealisateurUnFilm"
        :key="UnRealisateur.id_realisateur ?? undefined"
        class="snap-start"
      >
        <RouterLink
          :to="{
            name: 'films-realisateur-id',
            params: { id: UnRealisateur.id_realisateur }
          }"
          class="block"
        >
          <img
            :src="UnRealisateur.STAR!.url_images ?? undefined"
            :alt="UnRealisateur.FILM!.Titre ?? undefined"
            class="rounded-xl"
          />
          <p class="font-Spline font-medium text-center text-[16px]">
            {{ UnRealisateur.STAR!.Nom }} {{ UnRealisateur.STAR!.Prenom }}
          </p>
        </RouterLink>
      </li>
      <li
        v-for="UnScenariste in ScenariserUnFilm"
        :key="UnScenariste.id_scenariste ?? undefined"
        class="snap-start"
      >
        <RouterLink
          :to="{
            name: 'films-scenariste-id',
            params: { id: UnScenariste.id_scenariste }
          }"
          class="block"
        >
          <img
            :src="UnScenariste.STAR!.url_images ?? undefined"
            :alt="UnScenariste.FILM!.Titre ?? undefined"
            class="rounded-xl"
          />
          <p class="font-Spline font-medium text-center text-[16px]">
            {{ UnScenariste.STAR!.Nom }} {{ UnScenariste.STAR!.Prenom }}
          </p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
