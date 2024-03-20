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
</script>
<template>
  <h1>Profil utilisateur</h1>
  <button
    @click="Logout()"
    class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
  >
    Deconnexion
  </button>
</template>
