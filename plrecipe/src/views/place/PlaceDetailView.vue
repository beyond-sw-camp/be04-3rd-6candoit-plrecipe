<script setup>
import PlaceInfo from './PlaceInfo.vue'
import PlaceStars from './PlaceStars.vue'

import { ref, reactive, onMounted } from "vue";
import { useRoute } from 'vue-router'

const places = reactive([]);
const place = ref(null);
const pId = useRoute().params.id;

onMounted(async () => {
  const response = fetch('http://localhost:8080/place')
    .then(response => response.json());
  const data = await response;
  places.value = data;
  await getPlaceData(pId)
});

function getPlaceData(id) {
    const selectPlace = places.value.find(place => place.placeId == id);
    place.value = selectPlace;
}

</script>

<template>

    <template v-if="place">
        <PlaceInfo :placeData="place"/>
        <PlaceStars/>
    </template>
</template>

<style scoped></style>