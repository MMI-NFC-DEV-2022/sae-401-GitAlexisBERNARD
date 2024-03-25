<script setup lang="ts">
import CarrouselFilmFavoris from '@/components/CarrouselFilmsFavoris.vue'
import { supabase } from '@/supabase'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const FilmVerif = ref()

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
    .select('id_film')
    .eq('id_user', user!.id)
  if (FilmFavori) {
    FilmVerif.value = FilmFavori
  }
}
</script>
<template>
  <h1>Profil utilisateur</h1>
  <div class="flex flex-col gap-4">
    <RouterLink to="/modiffilm">
      <button
        class="bg-[#272727] hover:bg-slate-900 mb-2 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
      >
        Modification Films Créés par l'utilisateur
      </button>
    </RouterLink>
    <RouterLink to="/ajoutfilm">
      <button
        class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
      >
        Ajout Film
      </button>
    </RouterLink>
    <RouterLink to="/modificationprofil">
      <button
        class="bg-[#272727] hover:bg-slate-900 mb-2 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
      >
        Modification Profil
      </button>
    </RouterLink>
    <button
      @click="Logout()"
      class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
    >
      Deconnexion
    </button>
  </div>
  <h2>Vos Films Favoris</h2>
  <CarrouselFilmFavoris v-if="FilmVerif" />
  <p v-else>Vous n'avez pas de films favoris</p>
</template>
