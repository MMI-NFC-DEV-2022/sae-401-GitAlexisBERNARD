<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import { useRouter } from 'vue-router'
import type { Film } from '@/types'
const router = useRouter()
const props = defineProps<{ data?: Film; id?: string }>()
const UnFilmCreation = ref<Film>(props.data ?? {})
UnFilmCreation.value.url_images = 'https://guuceasiqcompvnghbwl.supabase.co/storage/v1/object/sign/sae401/readyplayeroncover.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWU0MDEvcmVhZHlwbGF5ZXJvbmNvdmVyLmpwZyIsImlhdCI6MTcxMDg0MDEwMiwiZXhwIjoxNzEzNDMyMTAyfQ.CUGoGfVX_V7JrK_TyPcS4x3E5ZlYf1MPX_E3pH5FuQk&t=2024-03-19T09%3A21%3A52.097Z'
UnFilmCreation.value.bg_image = "https://guuceasiqcompvnghbwl.supabase.co/storage/v1/object/sign/sae401/Film/bgready.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzYWU0MDEvRmlsbS9iZ3JlYWR5LmpwZWciLCJpYXQiOjE3MTA5NDE2NjQsImV4cCI6MzMyMTU0MDU2NjR9.Xs42hQCPeW9wsLres0L_cpqkRIzz5qW-LGaIt0oCGDU&t=2024-03-20T13%3A34%3A36.001Z"
UnFilmCreation.value.id_user = user.value?.id
async function upsertFilm() {
  if (!UnFilmCreation.value) return
  const { data, error } = await supabase.from('FILM_Utilisateur').upsert(UnFilmCreation.value)
  if (error) {
    console.error('Erreur lors de la mise à jour:', error.message)
  } else {
    router.push('/')
    console.log('Mise à jour réussie:', UnFilmCreation.value)
  }
}
</script>

<template>
  <p>Page d'ajout d'un film</p>
  <FormKit type="form" v-model="UnFilmCreation" @submit="upsertFilm" class="space-y-4">
    <FormKit
      id="Titre"
      name="Titre"
      label="Titre"
      validation="required"
      placeholder="Nom du film"
      class="w-full"
    />
    <FormKit
      id="Synopsis"
      name="Synopsis"
      type="textarea"
      label="Synopsis"
      validation="required"
      placeholder="Entrez le synopsis du film"
      class="w-full"
    />
    <FormKit
      id="DateSortie"
      name="DateSortie"
      type="date"
      label="Date de sortie"
      validation="required"
      placeholder="Sélectionnez la date de sortie"
      class="w-full"
    />
    <FormKit
      id="Durée"
      name="Durée"
      type="text"
      label="Durée"
      validation="required"
      placeholder="Entrez le synopsis du film"
      class="w-full"
    />

    <FormKit
      type="submit"
      label="Ajouter le film"
      class="w-full bg-[#F5C754] text-white font-bold py-2 px-4 rounded hover:bg-yellow-500"
    />
  </FormKit>
</template>
