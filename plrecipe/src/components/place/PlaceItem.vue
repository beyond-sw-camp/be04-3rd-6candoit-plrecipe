<template>

  <div class="places" id="places">

    <b-container class="bv-example-row mb-3">
      <b-row cols="4">
        <template v-for="place in props.places" :key="place.placeId">
          <b-col>
            <div class="place-block" @click="placeDetail(place.placeId)">
              <p id="place-name">{{ place.placeName }}</p>

              <p id="star">
                <span id="star-span" v-for='n in parseInt(place.avgStar)'>★</span>
                <span id="star-span" v-for='n in (5 - parseInt(place.avgStar))'>☆</span>
              </p>

              <p id="address">{{ place.placeLocation }}</p>

              <div id="place-category" :style="{ backgroundColor: getCategoryColor(place.placeCategory.placeCategoryName) }">
                {{ place.placeCategory.placeCategoryName }}
              </div>
            </div>
          </b-col>
        </template>
      </b-row>
    </b-container>

  </div>

</template>

<script setup>

import { defineProps } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps({
  places: Array
});

const router = useRouter();

const placeDetail = (id) => {
  console.log(id);
  router.push(`/place/detail/${id}`);
};

const categoryColors = {
  '음식점': 'lightpink',
  '카페': 'lightyellow',
  '문화': 'lightgreen',
  '액티비티': 'lightblue',
  '기타': 'lightgray',
  '산책': 'rgba(212, 170, 255, 0.952)',
};

const getCategoryColor = (categoryName) => {
  return categoryColors[categoryName] || '#FFFFFF'; // 기본 색상은 흰색
};

</script>

<style scoped>
@import url('@/assets/css/place/PlaceItem.css');
</style>