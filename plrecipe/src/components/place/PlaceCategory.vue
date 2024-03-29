<template>
  <div class="category">
    <div id="All" @click="changeCategory('')" :class="{All: activeCategory == ''}" >전체</div>
    <div id="food" @click="changeCategory(1)" :class="{food: activeCategory == 1}">음식점</div>
    <div id="cafe" @click="changeCategory(2)" :class="{cafe: activeCategory == 2}">카페</div>
    <div id="culture" @click="changeCategory(3)" :class="{culture: activeCategory == 3}">문화</div>
    <div id="activity" @click="changeCategory(4)" :class="{activity: activeCategory == 4}">액티비티</div>
    <div id="walk" @click="changeCategory(5)" :class="{walk: activeCategory == 5}">산책</div>
    <div id="etc" @click="changeCategory(6)" :class="{etc: activeCategory == 6}">기타</div>
      <button id="create-place" @click="createPlace">장소 등록</button>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from "vue-router";

const emit = defineEmits(['change']);
const activeCategory = ref('');

function changeCategory(category) {
  console.log(category);
  activeCategory.value = category;
  emit('change', category);
}

const router = useRouter();

const createPlace = () => {
  router.push('/place/new');
};

</script>

<style scoped>
@import url('@/assets/css/place/PlaceCategory.css');
</style>