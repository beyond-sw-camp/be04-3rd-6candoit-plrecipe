<template>

  <div class="places" id="places">

    <b-container class="bv-example-row mb-3">
      <b-row cols="5">
        <template v-for="place in props.places" :key="place.placeId">
          <b-col>
            <div class="place-block" @click="placeDetail">
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

const placeDetail = () => {
  router.push('/place/detail');
};

</script>

<style scoped>
.star-block,
.place-block {
  width: 200px;
  height: 100px;
  border: lightblue solid 1px;
  padding: 5px 10px;
  margin: 5px 5px;
  border-radius: 10px;
  position: relative;
  font-size: 10px;

}

#place-name {
  font-weight: bold;
  font-size: 15px;
  float: left;
}

#star {
  float: left;
  position: absolute;
  right: 10px;
  top: 10px;
}

#comment,
#address {
  clear: both;
}

#place-category {
  width: 100px;
  padding: 1px;
  border-radius: 10px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  background-color: bisque;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

#star-span {
  font-size: 13px;
  color: yellow;
}

.star-block:hover {
  transition: all 0.3s;
  box-shadow: 5px 5px lightblue;
}


#place-name {
  font-weight: bold;
  font-size: 15px;
  float: left;
}

#star {
  float: left;
  position: absolute;
  right: 10px;
  top: 10px;
}

#comment,
#address {
  clear: both;
}

#place-category {
  width: 100px;
  padding: 1px;
  border-radius: 10px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  background-color: bisque;
  position: absolute;
  right: 10px;
  bottom: 10px;
}

#star-span {
  font-size: 13px;
  color: yellow;
}

.star-block:hover {
  transition: all 0.3s;
  box-shadow: 5px 5px lightblue;
}

#stars,
#places {
  clear: both;
}
</style>