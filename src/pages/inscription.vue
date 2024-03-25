<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '../supabase'
import { FormKit } from '@formkit/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const password2 = ref('')

// async function signInWithGithub() {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'github'
//   })
//   if (error) {
//     alert(error.message)
//   } else {
//     router.push('/dashboard')
//   }
// }
async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    alert(error.message)
  } else {
    router.push('/')
  }
}
const register = async () => {
  if (password.value !== password2.value) {
    alert('Les mots de passe ne correspondent pas.')
    return
  }
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) {
    alert(error.message)
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] p-4">
    <h2 class="mt-[30px] ml-[20px] font-Spline font-semibold text-[25px]">Inscription</h2>
    <form
      class="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      v-if="!user"
      @submit.prevent="register"
    >
      <FormKit
        v-model="email"
        id="email"
        name="email"
        type="email"
        placeholder="Votre email"
        validation="required|email"
        class="mb-4"
        :classes="{
          input:
            'appearance-none border rounded-xl w-full p-[16px] mb-[24px] bg-[#E3E8F2] text-[#405473] leading-tight focus:outline-none focus:shadow-outline',
          label: 'block text-gray-700 text-sm font-bold mb-2'
        }"
      />
      <FormKit
        v-model="password"
        id="password"
        name="password"
        type="password"
        placeholder="Votre mot de passe"
        validation="required"
        class="mb-4"
        :classes="{
          input:
            'appearance-none border rounded-xl w-full p-[16px] mb-[24px] bg-[#E3E8F2] text-[#405473] leading-tight focus:outline-none focus:shadow-outline',
          label: 'block text-gray-700 text-sm font-bold mb-2'
        }"
      />
      <FormKit
        v-model="password2"
        id="password2"
        name="password2"
        type="password"
        placeholder="Confirmez le mot de passe"
        validation="required"
        class="mb-6"
        :classes="{
          input:
            'appearance-none border rounded-xl w-full p-[16px] bg-[#E3E8F2] text-[#405473] leading-tight focus:outline-none focus:shadow-outline',
          label: 'block text-gray-700 text-sm font-bold mb-2'
        }"
      />
      <button
        type="submit"
        class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
      >
        Inscription
      </button>
    </form>
  </div>
</template>

