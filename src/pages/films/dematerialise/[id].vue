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
  <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">
    Regarder {{ PlatformeStreaming![0]!.FILM!.Titre }}
  </h2>
  <div class="flex flex-col ml-5 gap-4">
    <div v-for="nPlatforme in PlatformeStreaming" :key="nPlatforme.id_platforme ?? undefined">
      <div v-if="nPlatforme.PLATEFORME">
        <a :href="nPlatforme.url ?? undefined" target="_blank">
          <div class="flex flex-row gap-4">
            <img
              class="w-14 h-14 rounded-xl"
              :src="nPlatforme.PLATEFORME.ImagePlatforme ?? undefined"
              :alt="nPlatforme.PLATEFORME.NomPlateforme ?? undefined"
            />
            <div class="flex flex-col">
              <p class="font-Spline font-medium text-[16px]">
                {{ nPlatforme.PLATEFORME.NomPlateforme }}
              </p>
              <p v-if="nPlatforme.prix && nPlatforme.abonnement" class="text-[14px] text-[#405473]">
                Disponible dans l’offre et à partir de {{ nPlatforme.prix }}€
              </p>
              <p v-else-if="nPlatforme.prix" class="text-[14px] text-[#405473]">
                Disponible à partir de {{ nPlatforme.prix }}€
              </p>
              <p v-else-if="nPlatforme.abonnement" class="text-[14px] text-[#405473]">
                Disponible dans l’offre
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
