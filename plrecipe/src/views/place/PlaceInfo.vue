<template>
    <table id="place-info">
        <tr>
            <!-- <td rowspan="5" colspan="2" id="placeImg"><img src="img/default_place.jpg" alt="Place"></td> -->
            <td colspan="2" id="placeName">[{{ placeData.placeName }}]</td>
        </tr>
        <tr>
            <td colspan="2" id="place-category"><span>{{ placeData.placeCategory.placeCategoryName }}</span></td>
        </tr>
        <tr>
            <td colspan="2" id="address">📌{{ placeData.placeLocation }}</td>
        </tr>
        <tr>
            <td colspan="2" id="avg-star">
                <p id="avg"> 평균 별점 </p>
                <p id="star-rating">
                    <span v-for="n in Math.floor(placeData.avgStar)" :key="'full-star-' + n">★</span>
                    <span v-for="n in (5 - Math.ceil(placeData.avgStar))" :key="'empty-star-' + n">☆</span>
                    <span>({{ placeData.avgStar.toFixed(1) }})</span>
                </p>
            </td>
        </tr>
        <tr id="etc">
            <td id="locationMap"><a href="https://map.naver.com/" target="_blank" rel="noopener">위치(지도)</a></td>
            <td id="phone"><span v-if="placeData.placePhoneNum">☎️ {{ placeData.placePhoneNum }}</span></td>
        </tr>
    </table>
</template>

<script setup>
import { reactive } from 'vue';

const placeData = reactive({
    "placeId": 1,
    "placeName": "보라매공원",
    "placeLocation": "서울광역시 보라매동",
    "placePhoneNum": "02-0000-0000",
    "placeCategory": {
        "placeCategoryId": 5,
        "placeCategoryName": "산책"
    },
    "avgStar": 3.0
});
</script>

<style scoped>
#place-info {
    margin: auto;
    font-size: 13px;
}

#place-info * {
    margin: 0px;
}

#place-name {
    font-weight: bold;
    font-size: 15px;
}

table #placeName {
    margin: 0px;
}

#place-category span {
    width: 50px;
    padding: 5px 15px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    background-color: bisque;
}

#star-span {
    color: yellow;
}

#avg {
    font-size: 10px;
}

#locationMap, #phone {
    background-color: lightblue;
    margin-left: 15px;
    margin-right: 15px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
    font-size: 10px;
}

table img {
    width: 180px;
    margin: auto;
}
</style>