<script setup lang="ts">
import CarrouselFilmUnActeur from '@/components/CarrouselFilmUnActeur.vue'
import { supabase } from '@/supabase'
import { defineProps } from 'vue'

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

function formatFrenchDate(dateString: string) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
</script>

<template>
  <div v-if="ErrorActeur">
    <h1>Acteur non trouvé</h1>
    <p>{{ ErrorActeur.message }}</p>
  </div>
  <div v-else>
    <div class="flex flex-row ml-5 gap-6 mt-[30px]">
      <img
        :src="Acteur!.url_images ?? undefined"
        :alt="Acteur!.Nom ?? undefined"
        class="w-[150px] h-[200px] rounded-xl"
      />
      <div>
        <h2 class="font-bold font-Spline text-xl">{{ Acteur!.Nom }} {{ Acteur!.Prenom }}</h2>
        <p>{{ Acteur!.DateNaissance ? formatFrenchDate(Acteur!.DateNaissance) : '' }}</p>
      </div>
    </div>
    <h2 class="font-bold font-Spline text-xl ml-5 mt-[30px]">Filmographie</h2>
    <CarrouselFilmUnActeur :id_acteur="unActeur.id" />
  </div>
</template>
