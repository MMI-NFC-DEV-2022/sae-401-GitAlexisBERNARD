<script setup lang="ts">
const props = defineProps<{
  id: string
}>()
import { supabase } from '@/supabase'
const { data: PlatformePhysique, error: ErrorPlatformePhysique } = await supabase
  .from('PHYSIQUE')
  .select(`*,FILM(Titre)`)
  .eq('id_film', props.id)

console.log(PlatformePhysique)
if (ErrorPlatformePhysique) {
  console.error(ErrorPlatformePhysique)
}
</script>
<template>
  <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Acheter {{ PlatformePhysique![0]!.FILM!.Titre }}</h2>
  <ul class="flex flex-col">
    <li v-for="nPhysique in PlatformePhysique" :key="nPhysique.id ?? undefined" class="flex">
      <img :src="nPhysique.url_images ?? undefined" :alt="nPhysique.NomPhysique ?? undefined" />
      <div>
        <p>{{ nPhysique.NomPhysique }}</p>
        <p>{{ nPhysique.Type }}</p>
        <p>{{ nPhysique.codec }}</p>
        <p>{{ nPhysique.AspectRatio }}</p>
      </div>
    </li>
  </ul>
</template>
