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
function formatFrenchDate(dateString: string) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
<template>
  <div v-if="ErrorScenariste">
    <h1>Réalisateur non trouvé</h1>
    <p>{{ ErrorScenariste.message }}</p>
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
    <CarrouselFilmUnScenariste :id_scenariste=" UnScenariste.id" />
  </div>
</template>
