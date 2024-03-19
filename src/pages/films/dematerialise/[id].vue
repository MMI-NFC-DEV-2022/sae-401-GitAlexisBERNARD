<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
import { supabase } from '@/supabase'
const { data: PlatformeStreaming, error: ErrorPlatformeStreaming } = await supabase
  .from('DematerialisePlateforme')
  .select(`id_platforme,url,abonnement,prix,PLATEFORME(NomPlateforme,ImagePlatforme),FILM(Titre)`)
  .eq('id_film', props.id)

console.log(PlatformeStreaming)
if (ErrorPlatformeStreaming) {
  console.error(ErrorPlatformeStreaming)
}
</script>
<template>
  <h2>Regarder {{ PlatformeStreaming![0]!.FILM!.Titre }}</h2>
  <div>
    <div v-for="nPlatforme in PlatformeStreaming" :key="nPlatforme.id_platforme ?? undefined">
      <div v-if="nPlatforme.PLATEFORME">
        <a :href="nPlatforme.url ?? undefined" target="_blank">
          <div>
            <img
              :src="nPlatforme.PLATEFORME.ImagePlatforme ?? undefined"
              :alt="nPlatforme.PLATEFORME.NomPlateforme ?? undefined"
            />
            <div>
              <p>{{ nPlatforme.PLATEFORME.NomPlateforme }}</p>
              <p v-if="nPlatforme.prix && nPlatforme.abonnement">Disponible dans l’offre et  à partir de {{nPlatforme.prix}}€</p>
              <p v-else-if="nPlatforme.prix">Disponible à partir de {{nPlatforme.prix}}€</p>
              <p v-else-if="nPlatforme.abonnement">Disponible dans l’offre</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
