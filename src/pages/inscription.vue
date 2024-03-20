<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '../supabase'
import { FormKit } from '@formkit/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const password2 = ref('')

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })
  if (error) {
    alert(error.message)
  } else {
    router.push('/dashboard')
  }
}
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
  const { user, error } = await supabase.auth.signUp({
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
  <div>
    <h2>Page d'inscription</h2>
    <FormKit
      type="form"
      v-if="!user"
      @submit="register"
      :config="{
        classes: {
          input: 'p-1 rounded border-red-300 shadow-sm border',
          label: 'text-gray-600'
        }
      }"
      :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
    >
      <FormKit v-model="email" name="email" label="Email" type="email" />
      <FormKit v-model="password" name="password" label="Mot de passe" type="password" />
      <FormKit
        v-model="password2"
        name="password2"
        label="Confirmer le mot de passe"
        type="password"
      />
    </FormKit>
  </div>
</template>
