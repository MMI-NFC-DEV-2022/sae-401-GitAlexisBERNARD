<script setup lang="ts">
const props = defineProps<{
  id_film: string
}>()
import { supabase } from '@/supabase'
const { data: PlatformeStreaming, error: ErrorPlatformeStreaming } = await supabase
  .from('DematerialisePlateforme')
  .select(`id_platforme,PLATEFORME(NomPlateforme,ImagePlatforme),url`)
  .eq('id_film', props.id_film)
  .limit(5)
console.log(PlatformeStreaming)
</script>
<template>
  <div class="flex flex-row gap-5 lg:ml-5 lg:justify-start justify-center">
    <div v-for="nPlatforme in PlatformeStreaming" :key="nPlatforme.id_platforme ?? undefined">
      <div v-if="nPlatforme.PLATEFORME">
        <a :href="nPlatforme.url ?? undefined" target="_blank">
          <img
            class="w-12 h-12 lg:w-20 lg:h-20 rounded-xl max-w-48"
            :src="nPlatforme.PLATEFORME!.ImagePlatforme ?? undefined"
            :alt="nPlatforme.PLATEFORME!.NomPlateforme ?? undefined"
          />
        </a>
      </div>
    </div>
  </div>
</template>
