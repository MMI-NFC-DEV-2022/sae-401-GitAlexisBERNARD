<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'
const router = useRouter()

async function Logout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error logging out:', error.message)
  } else {
    router.push('/')
  }
}
const {
  data: { user }
} = await supabase.auth.getUser()
if (user) {
  const { data: FilmFavori, error: ErrorFilmFavori } = await supabase
    .from('FilmFavori')
    .select('*')
    .eq('id_user', user!.id)
}
</script>
<template>
  <h1>Profil utilisateur</h1>
  <button
    @click="Logout()"
    class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
  >
    Deconnexion
  </button>
  <h2>Vos Films Favoris</h2>
  <CarrouselFilmFavoris v-if="FilmFavori" />
  <p v-else>Vous n'avez pas de films favoris</p>
</template>
