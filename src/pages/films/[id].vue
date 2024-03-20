<script setup lang="ts">
import PlatformeStreaming from '@/components/AfffichagePlatformeStreaming.vue'
import CarrouselActeurUnFilm from '@/components/CarrouselActeurUnFilm.vue'
import CarrouselRealisation from '@/components/CarrouselRealisation.vue'
import Clock from '@/components/icons/clock.vue'
import Favori from '@/components/icons/Favori.vue'
import { supabase } from '@/supabase'
const UnFilm = defineProps<{
  id: string
}>()
const { data: UnFilmData, error: ErrorUnFilm } = await supabase
  .from('FILM')
  .select('*')
  .eq('id', UnFilm.id)
  .single()
if (ErrorUnFilm) {
  console.error(ErrorUnFilm)
}
const { data: GenreFilm, error: ErrorGenreFilm } = await supabase
  .from('FilmGenre')
  .select(`id_genre,GENRE(Nom)`)
  .eq('id_film', UnFilm.id)

if (ErrorGenreFilm) {
  console.error(ErrorGenreFilm)
}
console.log(GenreFilm)

const { data: FilmPhysique, error: ErrorFilmPhysique } = await supabase
  .from('PHYSIQUE')
  .select(`id,NomPhysique,url_images,url`)
  .eq('id_film', UnFilm.id)

if (ErrorFilmPhysique) {
  console.error(ErrorFilmPhysique)
}
console.log(FilmPhysique)

function formatYear(dateString: string): number {
  const date = new Date(dateString)
  return date.getFullYear()
}
</script>
<template>
  <div v-if="ErrorUnFilm">
    <h1>Film non trouvé</h1>
    <p>{{ ErrorUnFilm.message }}</p>
  </div>
  <div v-else>
    <div
      :style="{
        'background-repeat': 'no-repeat',
        'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(' + UnFilmData!.bg_image + ')',
        'background-size': 'cover',
        'background-position': 'top',
 
    }"
      class="p-5 flex flex-row justify-between"
    >
      <div class="text-white">
        <h2 class="font-bold font-Spline text-xl">{{ UnFilmData!.Titre }}</h2>
        <p class="font-normal text-xs font-Spline mt-3">{{ UnFilmData!.intro }}</p>
        <p class="font-normal text-xs font-Spline mt-2">
          {{ UnFilmData!.DateSortie ? formatYear(UnFilmData!.DateSortie) : '' }}
        </p>
        <div class="flex flex-row items-center mt-2 gap-1">
          <Clock />
          <p class="font-normal text-xs font-Spline">{{ UnFilmData!.Durée }}</p>
        </div>
        <div v-for="ngenre in GenreFilm" class="font-normal text-xs font-Spline mt-4">
          {{ ngenre.GENRE!.Nom }}
        </div>
        <p class="font-bold text-xl font-Spline mt-5">{{ UnFilmData!.Note }}/5</p>
      </div>
      <div>
        <div class="flex justify-end pb-5">
          <Favori />
        </div>
        <img
          :src="UnFilmData!.url_images ?? undefined"
          :alt="UnFilmData!.Titre ??  undefined"
          class="rounded-xl w-[280px] h-[190px]"
        />
      </div>
    </div>
    <div>
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Synopsis</h2>
      <p class="font-Spline ml-5 font-normal">{{ UnFilmData!.Synopsis }}</p>
    </div>
    <div>
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Où regarder</h2>
      <PlatformeStreaming :id_film="UnFilm.id" />
      <RouterLink
        :to="{
          name: 'films-dematerialise-id',
          params: { id: UnFilm.id }
        }"
      >
        <div class="flex justify-center mb-7">
          <button class="bg-[#F5C754] font-bold w-[90%] py-3 rounded-xl mt-5">
            Voir toutes les offres
          </button>
        </div>
      </RouterLink>
    </div>
    <div v-if="FilmPhysique" class="bg-[#0E0E0E] text-white py-4">
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Supports</h2>
      <div class="flex flex-row justify-center gap-12">
        <div v-if="FilmPhysique[0]" class="flex flex-col">
          <a :href="FilmPhysique![0]!.url ?? undefined">
            <img
              class="w-[150px] h-[200px]"
              :src="FilmPhysique![0]!.url_images ?? undefined"
              :alt="FilmPhysique[0]!.NomPhysique ??  undefined"
            />
            <p>{{ FilmPhysique[0]!.NomPhysique }}</p>
          </a>
        </div>
        <div v-if="FilmPhysique[1]" class="flex flex-col">
          <a :href="FilmPhysique![1]!.url ?? undefined">
            <img
              class="w-[150px] h-[200px]"
              :src="FilmPhysique![1]!.url_images ?? undefined"
              :alt="FilmPhysique[1]!.NomPhysique ??  undefined"
            />
            <p>{{ FilmPhysique[1]!.NomPhysique }}</p>
          </a>
        </div>
      </div>
      <RouterLink
        :to="{
          name: 'films-physique-id',
          params: { id: UnFilm.id }
        }"
      >
        <div class="flex justify-center">
          <button class="bg-[#F5C754] text-black font-bold w-[90%] py-3 rounded-xl mt-5">
            Voir toutes les offres
          </button>
        </div>
      </RouterLink>
    </div>
    <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Acteurs</h2>
    <CarrouselActeurUnFilm :id_film="UnFilm.id" />
    <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Équipe de production</h2>
    <CarrouselRealisation :id_film="UnFilm.id" />
  </div>
</template>
