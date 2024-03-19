<script setup lang="ts">
const props = defineProps<{
  id_film: string
}>()
import { supabase } from '@/supabase'
const { data: PlatformeStreaming, error: ErrorPlatformeStreaming } = await supabase
  .from('DematerialisePlateforme')
  .select(`id_platforme,PLATEFORME(NomPlateforme),PLATEFORME(Logo),PLATEFORME(Lien),PLATEFORME(Description)`)
  .eq('id_film', props.id_film)
console.log(PlatformeStreaming)
</script>
<template>
  <h1>PlatformeStreaming</h1>
  <div>
    <div v-for="nPlatforme in PlatformeStreaming" :key="nPlatforme.id_platforme">
        <div v-if="nPlatforme.PLATEFORME">
            <p>{{ nPlatforme.PLATEFORME?.NomPlateforme }}</p>
            <
        </div>
    </div>
  </div>
</template>
