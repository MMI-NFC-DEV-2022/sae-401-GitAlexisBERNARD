<script setup lang="ts">
import { supabase } from '@/supabase'
const props = defineProps<{
  max?: number
}>()
const { data: FILM, error } = await supabase
  .from('FILM')
  .select('*')
  .eq('Nouveauté', true)
  .limit(props.max ?? 100)
</script>
<template>
  <div class="flex overflow-auto ml-5">
    <ul
      class="lg:flex-wrap lg:justify-center flex items-center flex-nowrap snap-x snap-mandatory scroll-smooth gap-3"
    >
      <li v-for="(nFILM, index) in FILM" :key="index" class="snap-start w-[40vw]">
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
