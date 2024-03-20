<script setup lang="ts">
import CarrouselFilmUnActeur from '@/components/CarrouselFilmUnActeur.vue'
import { supabase } from '@/supabase'
const unActeur = defineProps<{
  id: string
}>()
const { data: Acteur, error: ErrorActeur } = await supabase
  .from('STAR')
  .select(`*`)
  .eq('id', unActeur.id)
  .single()
console.log(Acteur)
if (ErrorActeur) {
  console.error(ErrorActeur)
}
</script>
<template>
  <div v-if="ErrorActeur">
    <h1>Acteur non trouvé</h1>
    <p>{{ ErrorActeur.message }}</p>
  </div>
  <div v-else>
    <h2>{{ Acteur!.Nom }}</h2>
    <p>{{ Acteur!.Prenom }}</p>
    <p>{{ Acteur!.DateNaissance }}</p>
    <img :src="Acteur!.url_images ?? undefined" :alt="Acteur!.Nom ?? undefined" />
    <CarrouselFilmUnActeur :id_acteur="unActeur.id" />
  </div>
</template>
