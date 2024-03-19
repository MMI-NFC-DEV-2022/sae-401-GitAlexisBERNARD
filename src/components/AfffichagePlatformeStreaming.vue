<script setup lang="ts">
const props = defineProps<{
  id_film: string
}>()
import { supabase } from '@/supabase'
const { data: PlatformeStreaming, error: ErrorPlatformeStreaming } = await supabase
  .from('DematerialisePlateforme')
  .select(`id_platforme,PLATEFORME(NomPlateforme,ImagePlatforme),url`)
  .eq('id_film', props.id_film)
console.log(PlatformeStreaming)
</script>
<template>
  <div>
    <div v-for="nPlatforme in PlatformeStreaming" :key="nPlatforme.id_platforme">
      <div v-if="nPlatforme.PLATEFORME">
        <a :href="nPlatforme.url" target="_blank">
        <p>{{ nPlatforme.PLATEFORME!.NomPlateforme }}</p>
        <img
          :src="nPlatforme.PLATEFORME!.ImagePlatforme"
          :alt="nPlatforme.PLATEFORME!.NomPlateforme"
        />
        </a>
      </div>
    </div>
  </div>
</template>
