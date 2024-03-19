<script setup lang="ts">
import { supabase } from '@/supabase'
const UnFilm = defineProps<{
  id: string
}>()
const { data: UnFilmData, error } = await supabase
  .from('FILM')
  .select('*')
  .eq('id', UnFilm.id)
  .single()
if (error) {
  console.error(error)
}
console.log(UnFilmData)
function formatYear(dateString: string): number {
  const date = new Date(dateString)
  return date.getFullYear()
}
</script>
<template>
  <div v-if="error">
    <h1>Film non trouvé</h1>
    <p>{{ error.message }}</p>
  </div>
  <div v-else>
    <div>
      <div>
        <h2>{{ UnFilmData!.Titre }}</h2>
        <p>{{ UnFilmData!.Synopsis }}</p>
        <p>{{ UnFilmData!.DateSortie ? formatYear(UnFilmData!.DateSortie) : '' }}</p>
        <p>{{ UnFilmData!.Durée }}</p>
      </div>
    </div>
  </div>
</template>
