
<script setup>
import NewStar from '@/components/place/NewStar.vue'

import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'

const place = ref(null);
const pId = useRoute().params.id;

onMounted(async () => {
    await getPlaceData(pId)
});

async function getPlaceData(id) {
    const response = fetch('http://localhost:3000/place')
        .then(response => response.json());
    const data = await response;

    const selectPlace = data.find(place => place.placeId == id);
    place.value = selectPlace;
}

</script>

<template>

    <template v-if="place">
        <NewStar :placeData="place" />
    </template>

</template>

<style scoped>

</style>