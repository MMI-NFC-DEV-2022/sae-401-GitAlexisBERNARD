<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import loginlogout from '@/components/loginlogout.vue'
</script>

<template>
  <header>
    <loginlogout />
  </header>
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
