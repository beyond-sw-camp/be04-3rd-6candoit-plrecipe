<template>
    <table id="place-info">
        <tr>
            <td rowspan="5" colspan="2" id="placeImg"><img src="@/img/boramae.jpg" alt="Place"></td>
            <td colspan="2" id="placeName">[{{ placeData.placeName }}]</td>
        </tr>
        <tr>
            <td colspan="2" id="place-category"><span>{{ placeData.placeCategory.placeCategoryName }}</span></td>
        </tr>
        <tr>
            <td colspan="2" id="address"><span>📌{{ placeData.placeLocation }}</span></td>
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
        <tr id="etc">
            <td id="locationMap"><a href="https://map.naver.com/p/search/보라매공원" target="_blank" rel="noopener">위치(지도)</a></td>
            <div id="phone">
                <div class="phone-content">
                    <span v-if="placeData.placePhoneNum">☎️ {{ placeData.placePhoneNum }}</span>
                </div>
            </div>
        </tr>
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
    margin: 1px;
}

#placeName {
        font-weight: bolder;
        font-size: 30px;
        float: left;
    }

    #address {
        padding: 5px;
    }

table #placeName {
    margin: 15px;
}

#place-category span {
    width: 50px;
    padding: 5px 20px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    background-color: bisque;
}

#star-span {
    color: gold;
}

#avg {
    font-size: 10px;
    padding-left:4px;
}

#locationMap {
    background-color: lightblue;
    margin-left: 15px;
    margin-right: 20px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
}

#phone {
    background-color: lightblue;
    margin-left: 20px;
    padding: 5px;
    text-align: center;
    border-radius: 20px;
}

#phone .phone-content {
    margin-left: 10px;
}

#img,
    #etc {
        width: 75%;
    }

table img {
    width: 260px;
    height:220px;
    margin: auto;
}

</style>