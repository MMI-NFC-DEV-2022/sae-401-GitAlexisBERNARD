<script setup lang="ts">
import CarrouselFilmUnRealisateur from '@/components/CarrouselFilmUnRealisateur.vue'
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
function formatFrenchDate(dateString: string) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
<template>
  <div v-if="ErrorRealisateur">
    <h1>Réalisateur non trouvé</h1>
    <p>{{ ErrorRealisateur.message }}</p>
  </div>
  <div v-else>
    <div class="flex flex-row ml-5 gap-6 mt-[30px]">
      <img
        :src="Realisateur!.url_images || undefined"
        :alt="Realisateur!.Nom || undefined"
        class="w-[150px] h-[200px] rounded-xl"
      />
      <div>
        <h2 class="font-bold font-Spline text-xl">
          {{ Realisateur!.Nom }} {{ Realisateur!.Prenom }}
        </h2>
        <p>{{ Realisateur!.DateNaissance ? formatFrenchDate(Realisateur!.DateNaissance) : '' }}</p>
      </div>
    </div>
    <h2 class="font-bold font-Spline text-xl ml-5 mt-[30px]">Filmographie</h2>
    <CarrouselFilmUnRealisateur :id_realisateur="unRealisateur.id" />
  </div>
</template>
