<script setup lang="ts">
import CarrouselAllFilms from '@/components/CarrouselAllFilms.vue'
import Tags from '@/components/tags.vue'
import SearchBar from '@/components/SearchBar.vue'
import CarrouselNouveaute from '@/components/CarrouselNouveaute.vue'
import CarrouselUtilisateur from '@/components/CarrouselUtilisateur.vue'
</script>
<template>
  <body class="ml-[20pxx]">
    <SearchBar class="lg:hidden block" />
    <Tags />
    <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4 lg:text-[32px]">Les films du moment</h2>
    <CarrouselAllFilms :max="3" />
    <div class="flex justify-end">
      <button
        class="font-Spline font-bold text-xs px-6 py-3 rounded-xl bg-[#E3E8F2] mt-[30px] mr-[20px]"
      >
        Voir tout les films
      </button>
    </div>
    <div style="background-image: url(/images/bgimage.png)" class="h-[200px] py-8 px-6 mt-7">
      <h3 class="font-Spline text-white font-semibold text-xl">
        Rejoins la communauté Dès maintenant
      </h3>
      <div class="flex justify-end">
        <RouterLink to="/inscription">
          <button
            class="font-Spline font-bold text-xs px-8 py-3 rounded-xl bg-[#F5C754] mt-[30px] mr-[20px]"
          >
            Inscription
          </button>
        </RouterLink>
      </div>
    </div>
    <div>
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">Nouveauté</h2>
      <CarrouselNouveaute :max="3" />
      <div class="flex justify-end">
        <RouterLink to="/films/nouveaute">
          <button
            class="font-Spline font-bold text-xs px-6 py-3 rounded-xl bg-[#E3E8F2] mt-[30px] mr-[20px]"
          >
            Voir tout les nouveautés
          </button>
        </RouterLink>
      </div>
    </div>
    <div>
      <h2 class="font-bold font-Spline ml-5 text-xl mt-6 mb-4">
        Films Ajoutés par les utilisateurs
      </h2>
      <CarrouselUtilisateur :max="3" />
      <div class="flex justify-end">
        <RouterLink to="/filmsutilisateur">
          <button
            class="font-Spline font-bold text-xs px-6 py-3 rounded-xl bg-[#E3E8F2] mt-[30px] mr-[20px]"
          >
            Voir tout les des utilisateurs
          </button>
        </RouterLink>
      </div>
    </div>
  </body>
</template>
