<script setup>
import { useRoute } from 'vue-router'

const currentRoute = useRoute();

</script>

<template>

<div class="new-star-container ">
    <p id="name">{{ currentRoute.query.placeName }}</p>
    <p>{{ currentRoute.query.location }}</p>
    <p id="star-rating">
        <span id="star-span" v-for="n in Math.floor(currentRoute.query.rating)">★</span>
        <span id="star-span" v-for="n in (5 - Math.ceil(currentRoute.query.rating))">☆</span>
    </p>
    <p>{{ currentRoute.query.comment }}</p>
</div>
</template>

<style scoped>

@import url('@/assets/css/place/NewStar.css');

</style>
