<script setup lang="ts">
import PlatformeStreaming from '@/components/AfffichagePlatformeStreaming.vue'
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
        <img :src="UnFilmData!.url_images" alt="UnFilmData!.Titre" />
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
  </div>
</template>
