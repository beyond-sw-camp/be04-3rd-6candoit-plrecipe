<script setup>
import PlaceCategory from '@/components/place/PlaceCategory.vue'
import PlaceItemView from '@/components/place/PlaceItem.vue'

import { ref, reactive, onMounted } from "vue";

const places = reactive([]);
const categoryCode = ref('');

onMounted(async () => {
  const response = fetch('http://localhost:3000/place')
    .then(response => response.json());
  const data = await response;
  places.value = data;
  getPlaceData('');
});

function changeCategory(id) {
  categoryCode.value = id;
  getPlaceData(id);
}

function getPlaceData(id) {

  if(id == ''){
    places.splice(0, places.length, ...places.value);
  }else{
    const newPlaces = places.value.filter(place => place.placeCategory.placeCategoryId === id);
    places.splice(0, places.length, ...newPlaces);
  }

}


</script>

<template>
  <main>
    <PlaceCategory @change="changeCategory" @detail="placeDetail" />

    <PlaceItemView :places="places" />
  </main>

</template>



<style scoped>

</style>