<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onErrorCaptured, Suspense } from 'vue'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
onErrorCaptured((error) => {
  console.error('Erreur globale :', error)
})
</script>

<template>
  <HeaderPage />
  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
  <FooterPage />
</template>
