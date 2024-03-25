<script setup lang="ts">
import { supabase, user } from '@/supabase'
import { useRouter } from 'vue-router'

const props = defineProps<{
  max?: number
}>()
const {
  data: { user }
} = await supabase.auth.getUser()
const { data: FilmsUser } = await supabase
  .from('FILM_Utilisateur')
  .select('*')
  .eq('id_user', user?.id)
    .limit(props.max ?? 100)
console.log(user?.id)
console.log(FilmsUser)
</script>

<template>
  <div class="pl-5">
    <h1>liste des Films crée par l'utilsiateur connecté:</h1>
    <ul class="flex flex-col gap-2 p-2">
      <li v-for="nFilms in FilmsUser" :key="index">
        <RouterLink
          :to="{
            name: 'films-data',
            params: { data: JSON.stringify(nFilms) }
          }"
        >
          <img :src="nFilms.url_images ?? ''" alt="nFILM.Titre" class="rounded-xl" />
          <p class="font-Spline font-medium text-center text-[16px]">{{ nFilms.Titre }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
