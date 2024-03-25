<script setup lang="ts">
import { ref } from 'vue'
import { user, supabase } from '../supabase'
import { FormKit } from '@formkit/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const pseudo = ref('')
const photo = ref<File | null>(null);

async function update() {
  const { data, error } = await supabase
    .from('users')
    .update({
      Pseudo: pseudo.value,
      ImagUser: photo.value
    })
    .eq('id_user', user.value?.id)
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
      @submit.prevent="update"
    >
      <FormKit
        v-model="pseudo"
        id="pseudo"
        name="pseudo"
        type="text"
        placeholder="Votre pseudo"
        validation="required"
        class="mb-4"
        :classes="{
          input:
            'appearance-none border rounded-xl w-full p-[16px] mb-[24px] bg-[#E3E8F2] text-[#405473] leading-tight focus:outline-none focus:shadow-outline',
          label: 'block text-gray-700 text-sm font-bold mb-2'
        }"
      />
      <FormKit
        v-model="photo"
        type="file"
        placeholder="Ajouter une photo de profil"
        accept=".jpg .png .webp .jpeg"
        help="Select as many documents as you would like."
        multiple="false"
      />
      <button
        type="submit"
        class="bg-[#F5C754] hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
      >
        Appliquer les modifications
      </button>
    </form>
  </div>
</template>
