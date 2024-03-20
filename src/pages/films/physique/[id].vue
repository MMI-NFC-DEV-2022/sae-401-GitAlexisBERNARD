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
  <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">
    Acheter {{ PlatformePhysique![0]!.FILM!.Titre }}
  </h2>
  <ul class="flex flex-col ml-5 gap-6">
    <li
      v-for="nPhysique in PlatformePhysique"
      :key="nPhysique.id ?? undefined"
      class="flex flex-row gap-5"
    >
      <img
        :src="nPhysique.url_images ?? undefined"
        :alt="nPhysique.NomPhysique ?? undefined"
        class="w-[120px] h-[160px]"
      />
      <div class="flex flex-col gap-[5px]">
        <p class="font-Spline text-normal text-[24px]">{{ nPhysique.NomPhysique }}</p>
        <p class="font-Spline text-normal text-[14px]">{{ nPhysique.Type }}</p>
        <p class="font-Spline text-normal text-[14px] text-[#405473]">{{ nPhysique.Resolution }}</p>
        <p class="font-Spline text-normal text-[14px] text-[#405473]">{{ nPhysique.codec }}</p>
        <p class="font-Spline text-normal text-[14px] text-[#405473]">
          Aspect ratio: {{ nPhysique.AspectRatio }}
        </p>
      </div>
    </li>
  </ul>
</template>
