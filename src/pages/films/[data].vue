<script setup lang="ts">
import FormModif from '@/components/FormModif.vue'
import { useRoute } from 'vue-router'
defineProps<{ data: string }>();
</script>
<template>
  <FormModif :data="JSON.parse(data)" />
</template>
