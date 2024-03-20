<script setup lang="ts">
import CarrouselAllFilms from '@/components/CarrouselAllFilms.vue'
import Tags from '@/components/tags.vue'
import SearchBar from '@/components/SearchBar.vue'
import CarrouselNouveaute from '@/components/CarrouselNouveaute.vue'
</script>
<template>
  <body class="ml-[20pxx]">
    <SearchBar />
    <Tags />
    <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Les films du moment</h2>
    <CarrouselAllFilms />
    <div class="flex justify-end">
      <button
        class="font-Spline font-bold text-xs px-6 py-3 rounded-xl bg-[#E3E8F2] mt-[30px] mr-[20px]"
      >
        Voir tout les films
      </button>
    </div>
    <div style="background-image: url(public/images/bgimage.png)" class="h-[200px] py-8 px-6 mt-7">
      <h3 class="font-Spline text-white font-semibold text-xl">
        Rejoins la communauté Dès maintenant
      </h3>
      <div class="flex justify-end">
        <button
          class="font-Spline font-bold text-xs px-8 py-3 rounded-xl bg-[#F5C754] mt-[30px] mr-[20px]"
        >
          Inscription
        </button>
      </div>
    </div>
    <div>
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Nouveauté</h2>
      <CarrouselNouveaute />
      <div class="flex justify-end">
        <button
          class="font-Spline font-bold text-xs px-6 py-3 rounded-xl bg-[#E3E8F2] mt-[30px] mr-[20px]"
        >
          Voir tout les nouveautés
        </button>
      </div>
    </div>
  </body>
</template>
