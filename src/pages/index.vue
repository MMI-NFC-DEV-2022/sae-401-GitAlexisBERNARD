<script setup lang="ts">
import BasketProfil from '@/components/icons/vueProfil.vue'
import type { Basket } from '../types'
import ListeBaskets from '@/components/ListeBaskets.vue'
import ListeAllBaskets from '@/components/ListeAllBaskets.vue'
import { supabase } from '@/supabase'
const { data: { user } } = await supabase.auth.getUser()
</script>
<template>
  <h1>SAE 401</h1>
</template>
