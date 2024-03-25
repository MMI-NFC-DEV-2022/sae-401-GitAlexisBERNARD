<script setup lang="ts">
import { supabase, user } from '../supabase'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const props = defineProps<{
  max?: number
}>()
let FilmsUser
if (user.value?.id) {
  const { data } = await supabase
    .from('FILM_Utilisateur')
    .select('*')
    .eq('id_user', user.value.id)
    .limit(props.max ?? 100)
  FilmsUser = data
  console.log(user?.value.id)
}
console.log(FilmsUser)
</script>

<template>
  <div class="pl-5" v-if="user?.id">
    <h1>liste des Films crée par l'utilisateur connecté:</h1>
    <ul class="flex flex-col gap-2 p-2">
      <li v-for="(nFilms, index) in FilmsUser" :key="index">
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
  <div v-else>
    <h1>Vous devez être connecté pour voir vos films</h1>
  </div>
</template>
