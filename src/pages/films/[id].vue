<script setup lang="ts">
import PlatformeStreaming from '@/components/AfffichagePlatformeStreaming.vue'
import CarrouselActeurUnFilm from '@/components/CarrouselActeurUnFilm.vue'
import CarrouselRealisation from '@/components/CarrouselRealisation.vue'
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
  .select(`id,NomPhysique,url_images`)
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
    <div>
      <div>
        <h2>{{ UnFilmData!.Titre }}</h2>
        <p>{{ UnFilmData!.intro }}</p>
        <p>{{ UnFilmData!.DateSortie ? formatYear(UnFilmData!.DateSortie) : '' }}</p>
        <p>{{ UnFilmData!.Durée }}</p>
        <div v-for="ngenre in GenreFilm">{{ ngenre.GENRE!.Nom }}</div>
        <p>{{ UnFilmData!.Note }}/5</p>
      </div>
      <div>
        <img :src="UnFilmData!.url_images ?? undefined" :alt="UnFilmData!.Titre ??  undefined" />
      </div>
    </div>
    <div>
      <h2>Synopsis</h2>
      <p>{{ UnFilmData!.Synopsis }}</p>
    </div>
    <div>
      <h2>Où regarder</h2>
      <PlatformeStreaming :id_film="UnFilm.id" />
      <RouterLink
        :to="{
          name: 'films-dematerialise-id',
          params: { id: UnFilm.id }
        }"
      >
        <button>Voir toutes les offres</button>
      </RouterLink>
    </div>
    <div v-if="FilmPhysique">
      <h2>Supports</h2>
      <div>
        <div v-if="FilmPhysique[0]">
          <img
            :src="FilmPhysique![0]!.url_images ?? undefined"
            :alt="FilmPhysique[0]!.NomPhysique ??  undefined"
          />
          <p>{{ FilmPhysique[0]!.NomPhysique }}</p>
        </div>
        <div v-if="FilmPhysique[1]">
          <img
            :src="FilmPhysique![1]!.url_images ?? undefined"
            :alt="FilmPhysique[1]!.NomPhysique ??  undefined"
          />
          <p>{{ FilmPhysique[1]!.NomPhysique }}</p>
        </div>
      </div>
      <RouterLink
        :to="{
          name: 'films-physique-id',
          params: { id: UnFilm.id }
        }"
      >
        <button>Voir toutes les offres</button>
      </RouterLink>
    </div>
    <CarrouselActeurUnFilm :id_film="UnFilm.id" />
    <CarrouselRealisation :id_film="UnFilm.id" />
  </div>
</template>
