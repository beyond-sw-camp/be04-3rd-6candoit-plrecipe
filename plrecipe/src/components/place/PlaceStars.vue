<template>
    <div id="stars">
        <div class="star-block" v-for="star in starBlocks" :key="star.id">
            <div class="img">
                <img :src="`/src/assets/img/member/ham${(star.member.memberId%7)+1}.jpg`" alt="Member">
            </div>
            <div class="star-info">
                <p class="member-nickname">{{ star.member.memberNickname }}</p>
                <p class="star">
                    <span class="star-span" v-for="n in Math.floor(star.starPoint)" :key="`star-${n}`">★</span>
                    <span class="star-span" v-for="n in (5 - Math.ceil(star.starPoint))"
                        :key="`empty-star-${n}`">☆</span>
                </p>
                <!-- <div class="comment">{{ star.starComment }}</div> -->
                <p class="comment">{{ star.starComment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    starBlocks: Array
});

</script>

<style scoped>
@import url('@/assets/css/place/PlaceStars.css');
</style>