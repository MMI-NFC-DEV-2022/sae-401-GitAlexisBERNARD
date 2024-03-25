<template>
  <div class="lg:flex flex-col hidden ml-11 mt-8">
    <div class="relative">
      <select
        class="block appearance-nonebg-[#E3E8F2] text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="category-select"
      >
        <option value="all">Tout</option>
        <option value="action">Action</option>
        <option value="comedy">Comédie</option>
        <option value="drama">Drame</option>
        <option value="horror">Horreur</option>
      </select>
    </div>
  </div>

  <div class="lg:hidden flex overflow-auto ml-5 items-center flex-nowrap gap-3">
    <button class="category-button px-4 py-1 font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
      Tout
    </button>
    <button class="category-button px-4 py-1 font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
      Action
    </button>
    <button class="category-button px-4 py-1 font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
      Comédie
    </button>
    <button class="category-button px-4 py-1 font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
      Drame
    </button>
    <button class="category-button px-4 py-1 font-medium text-[16px] rounded-xl bg-[#E3E8F2]">
      Horreur
    </button>
  </div>
</template>
