<script setup lang="ts">
import CarrouselFilmUnRealisateur from '@/components/CarrouselFilmUnRealisateur.vue';
import { supabase } from '@/supabase'
const unRealisateur = defineProps<{
  id: string
}>()
const { data: Realisateur, error: ErrorRealisateur } = await supabase
  .from('STAR')
  .select(`*`)
  .eq('id', unRealisateur.id)
  .single()
console.log(Realisateur)
if (ErrorRealisateur) {
  console.error(ErrorRealisateur)
}
</script>
<template>
  <div v-if="ErrorRealisateur">
    <h1>Réalisaeur non trouvé</h1>
    <p>{{ ErrorRealisateur.message }}</p>
  </div>
  <div v-else>
    <h2>{{ Realisateur!.Nom }}</h2>
    <p>{{ Realisateur!.Prenom }}</p>
    <p>{{ Realisateur!.DateNaissance }}</p>
    <img :src="Realisateur!.url_images ?? undefined" :alt="Realisateur!.Nom ?? undefined" />
    <CarrouselFilmUnRealisateur :id_realisateur="unRealisateur.id" />
  </div>
</template>
