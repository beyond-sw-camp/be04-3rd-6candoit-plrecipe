<template>

  <div class="places" id="places">

    <b-container class="bv-example-row mb-3">
      <b-row cols="4">
        <template v-for="place in props.places" :key="place.placeId">
          <b-col>
            <div class="place-block" @click="placeDetail(place.placeId)">
              <p id="place-name">{{ place.placeName }}</p>

              <p id="star">
                <span id="star-span" v-for='n in parseInt(place.avgStar)'>★</span>
                <span id="star-span" v-for='n in (5 - parseInt(place.avgStar))'>☆</span>
              </p>

              <p id="address">{{ place.placeLocation }}</p>

              <div id="place-category">
                {{ place.placeCategory.placeCategoryName }}
              </div>
            </div>
          </b-col>
        </template>
      </b-row>
    </b-container>

  </div>

</template>

<script setup>

import { defineProps } from 'vue';
import { useRouter } from "vue-router";

const props = defineProps({
  places: Array
});

const router = useRouter();

const placeDetail = (id) => {
  console.log(id);
  router.push(`/place/detail/${id}`);
};

</script>

<style scoped>

.star-block,
.place-block {
  width: 300px;
  height: 150px;
  border: black solid 3px;
  padding: 10px 15px;
  margin: 5px 5px;
  border-radius: 10px;
  position: relative;
  font-size: 15px;

}

#star {
  float: left;
  position: absolute;
  right: 10px;
  top: 10px;
}

#place-name {
  font-weight: bold;
  font-size: 20px;
  float: left;
}

#comment,
#address {
  clear: both;
}

#place-category {
  width: 80px;
  height: 30px;
  padding: 2px;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  background-color: bisque;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

#star-span {
  font-size: 20px;
  color: gold;
}

.star-block:hover, .place-block:hover {
  transition: all 0.3s;
  box-shadow: 5px 5px lightblue;
}

#stars,
#places {
  clear: both;
}
</style>