<script setup lang="ts">
import CarrouselFilmUnScenariste from '@/components/CarrouselFilmUnScenariste.vue'
import { supabase } from '@/supabase'
const UnScenariste = defineProps<{
  id: string
}>()
const { data: Realisateur, error: ErrorScenariste} = await supabase
  .from('STAR')
  .select(`*`)
  .eq('id', UnScenariste.id)
  .single()
console.log(UnScenariste)
if (ErrorScenariste) {
  console.error(ErrorScenariste)
}
</script>
<template>
  <div v-if="ErrorScenariste">
    <h1>Réalisaeur non trouvé</h1>
    <p>{{ ErrorScenariste.message }}</p>
  </div>
  <div v-else>
    <h2>{{ Realisateur!.Nom }}</h2>
    <p>{{ Realisateur!.Prenom }}</p>
    <p>{{ Realisateur!.DateNaissance }}</p>
    <img :src="Realisateur!.url_images ?? undefined" :alt="Realisateur!.Nom ?? undefined" />
    <CarrouselFilmUnScenariste :id_scenariste="UnScenariste.id" />
  </div>
</template>
