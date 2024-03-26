<script setup>
import PlaceCategory from './PlaceCategory.vue'
import PlaceItemView from './PlaceItemView.vue'

const places =
  [
    {
      "placeId": 1,
      "placeName": "보라매공원",
      "placeLocation": "서울광역시 보라매동",
      "placePhoneNum": null,
      "placeCategory": {
        "placeCategoryId": 5,
        "placeCategoryName": "산책"
      },
      "avgStar": 5.0
    },
    {
      "placeId": 2,
      "placeName": "귤밭체험농장",
      "placeLocation": "제주특별자치도 귤동",
      "placePhoneNum": null,
      "placeCategory": {
        "placeCategoryId": 5,
        "placeCategoryName": "산책"
      },
      "avgStar": 0.0
    },
    {
      "placeId": 3,
      "placeName": "배김윤조한공원",
      "placeLocation": "서울광역시 신대방동",
      "placePhoneNum": null,
      "placeCategory": {
        "placeCategoryId": 5,
        "placeCategoryName": "산책"
      },
      "avgStar": 4.5
    }];


import { provide, ref, reactive } from "vue";

const placeData = reactive(places);
const categoryCode = ref('');

function changeCategory(id) {
  categoryCode.value = id;
  console.log(id);
  getPlaceData(id);
}

function getPlaceData(id){
  // placeData.value =  // id에 맞는 데이터 가져오기

  placeData.value = [{
      "placeId": 1,
      "placeName": "보라매공원",
      "placeLocation": "서울광역시 보라매동",
      "placePhoneNum": null,
      "placeCategory": {
        "placeCategoryId": 5,
        "placeCategoryName": "산책"
      },
      "avgStar": 5.0
    }]
}

</script>

<template>
  <main>
    <PlaceCategory @change="changeCategory" />

    <PlaceItemView :placeData="placeData"/>

  </main>

</template>



<style scoped>
</style>