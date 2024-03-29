<template>
    <table id="place-info">
        <tr>
            <td rowspan="5" colspan="2" id="placeImg"><img src="@/assets/img/boramae.jpg" alt="Place"></td>
            <td colspan="2" id="placeName">[{{ placeData.placeName }}]</td>
        </tr>
        <tr>
            <td colspan="2" id="place-category">
                <span class="category-name"
                    :style="{ backgroundColor: getCategoryColor(placeData.placeCategory.placeCategoryName) }">{{
                placeData.placeCategory.placeCategoryName }}</span>
            </td>
        </tr>
        <tr>
            <td colspan="2" id="address">
                <span class="location-icon">📌</span>
                <span class="location">{{ placeData.placeLocation }}</span>
            </td>
        </tr>
        <tr>
            <td colspan="1">
                <div id="avg-star">
                    <p id="avg"> 평균 별점 </p>
                    <p id="star-rating">
                        <span id="star-span" v-for="n in Math.floor(placeData.avgStar)" :key="'full-star-' + n">★</span>
                        <span id="star-span" v-for="n in (5 - Math.ceil(placeData.avgStar))"
                            :key="'empty-star-' + n">☆</span>
                        <span>({{ placeData.avgStar.toFixed(1) }})</span>
                    </p>
                </div>
                <div id="registStar" @click="regist(placeData.placeId)">
                    별점 등록
                </div>
            </td>

        </tr>
        <div id="etc">
            <div id="locationMap">
                <a href="https://map.naver.com/p/search/보라매공원" target="_blank" rel="noopener">위치(지도)</a>
            </div>
            <div id="phone">
                <span v-if="placeData.placePhoneNum">☎️ {{ placeData.placePhoneNum }}</span>
            </div>
        </div>
    </table>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    placeData: Array
});

const categoryColors = {
    '음식점': 'lightpink',
    '카페': 'lightyellow',
    '문화': 'lightgreen',
    '액티비티': 'lightblue',
    '기타': 'lightgray',
    '산책': 'rgba(212, 170, 255, 0.952)',
};

const regist = (id) => {
    console.log(id);
    router.push(`/place/registStar/${id}`);
};

const getCategoryColor = (categoryName) => {
    return categoryColors[categoryName] || '#FFFFFF';
};

</script>

<style scoped>
@import url('@/assets/css/place/PlaceInfo.css');
</style>