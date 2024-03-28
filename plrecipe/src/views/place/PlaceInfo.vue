<template>
    <table id="place-info">
        <tr>
            <td rowspan="5" colspan="2" id="placeImg"><img src="@/assets/img/boramae.jpg" alt="Place"></td>
            <td colspan="2" id="placeName">[{{ placeData.placeName }}]</td>
        </tr>
        <tr>
            <td colspan="2" id="place-category">
                <span class="category-name">{{ placeData.placeCategory.placeCategoryName }}</span>
            </td>
        </tr>
        <tr>
            <td colspan="2" id="address">
                <span class="location-icon">📌</span>
                <span class="location">{{ placeData.placeLocation }}</span>
            </td>
        </tr>
        <tr>
            <td colspan="2" id="avg-star">
                <p id="avg"> 평균 별점 </p>
                <p id="star-rating">
                    <span id="star-span" v-for="n in Math.floor(placeData.avgStar)" :key="'full-star-' + n">★</span>
                    <span id="star-span" v-for="n in (5 - Math.ceil(placeData.avgStar))" :key="'empty-star-' + n">☆</span>
                    <span>({{ placeData.avgStar.toFixed(1) }})</span>
                </p>
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

const props = defineProps({
  placeData: Array
});

</script>

<style scoped>
#place-info {
    width: 680px;
    /* border: 1px solid black; */
    margin: auto;
    font-size: 13px;
    padding: 30px;
    margin-top: 20px;
}

#place-info * {
    margin: 2px;
}

#placeImg {
    padding-bottom: 0;
}

#placeName {
    font-weight: bolder;
    font-size: 30px;
    font-family: 'KCC-Hanbit', sans-serif;
    float: left;
    padding-top: 0;
}

#address {
    padding: 5px;
    font-family: 'KCC-Hanbit', sans-serif;
}

table #placeName {
    margin: 5px;
}

#place-category span {
    width: 50px;
    padding: 5px 20px;
    border-radius: 15px;
    text-align: center;
    font-family: 'KCC-Hanbit', sans-serif;
    font-size: 12px;
    font-weight: bold;
    background-color: bisque;
    
}

#star-span {
    color: gold;
    display: inline-block; 
    margin: 0 2px; 
    font-size: 1rem; 
}

#star-rating {
    margin-top: 0; 
}

#avg {
    font-size: 10px;
    padding-left:4px;
    font-family: 'KCC-Hanbit', sans-serif;
    margin-bottom: 0;
}

#etc {
    display: flex; /* 이 부분이 요소들을 가로로 나열합니다. */
    align-items: center; /* 세로 중심으로 요소들을 정렬합니다. */
}

#locationMap {
    background-color: lightblue;
    padding: 5px 50px; /* 내부 여백 */
    border-radius: 20px;
    font-family: 'KCC-Hanbit', sans-serif;
    margin-right: 15px; 
}

#phone {
    background-color: lightblue;
    padding: 5px 10px; /* 내부 여백 */
    border-radius: 20px;
    font-family: 'KCC-Hanbit', sans-serif;
    margin-right: 10px; /* 오른쪽 여백, 마지막 요소에는 불필요할 수 있습니다. */
}

#phone {
    margin-right: 0; /* 전화번호가 줄 바뀜 없이 나타나도록 설정 */
}

#phone{
    margin-left: 0px;
}

table img {
    width: 300px;
    height:220px;
    margin: auto;
}

@font-face {
    font-family: 'KCC-Hanbit';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

</style>