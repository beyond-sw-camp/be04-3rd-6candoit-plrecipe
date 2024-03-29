<template>
<div class="placeDiv">
  <div class="places" id="places">
    <template v-for="place in props.places" :key="place.placeId">
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
        </template>
      </div>
    </div>
      
      <div class="search">
        <select id="condition" v-model="type">
          <option value="장소이름">장소 이름</option>
          <option value="주소">주소</option>
        </select>
        <input type="text" id="input-search" v-model="keyword">
        <button id="search-place" @click="searchKeyword">검색</button>
      </div>
      <br>
  
</template>

<script setup>

import { defineProps, ref, defineEmits } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps({
  places: Array
});

const emit = defineEmits(['search']);

const router = useRouter();
const type = ref("장소이름");
const keyword = ref("");

const searchKeyword = ()=>{
  emit('search', type.value, keyword.value);
}

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
  return categoryColors[categoryName] || '#FFFFFF'; 
};

const searchPlace = () => {
  alert('검색 기능 구현 중입니다')
};

</script>

<style scoped>
@import url('@/assets/css/place/PlaceItem.css');
</style>