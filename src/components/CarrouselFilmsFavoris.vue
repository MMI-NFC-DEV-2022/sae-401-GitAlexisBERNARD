<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  max?: number
}>()
const {
  data: { user }
} = await supabase.auth.getUser()
if (user) {
  const { data: FilmFavori, error: ErrorFilmFavori } = await supabase
    .from('FilmFavori')
    .select('id_film,FILM(Titre,url_images)')
    .eq('id_user', user!.id)
    .single()
  console.log('Erreur film favori', ErrorFilmFavori)
}
</script>
<template>
  <div class="flex overflow-auto ml-5">
    <ul class="flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3">
      <li v-for="(nFILM, index) in FilmFavori" :key="index" class="snap-start w-[40vw]">
        <RouterLink
          :to="{
            name: 'films-id',
            params: { id: nFILM.id }
          }"
          class="block"
        >
          <img :src="nFILM.url_images ?? ''" alt="nFILM.Titre" class="rounded-xl" />
          <p class="font-Spline font-medium text-center text-[16px]">{{ nFILM.Titre }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
