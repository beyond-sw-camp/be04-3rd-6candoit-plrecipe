<template>
  <div class="new-place-container">
    <form @submit.prevent="submitPlace">
      <div>
        <label for="title">장소 이름:</label>
        <input type="text" id="title" v-model="placeForm.title">
      </div>
      <div>
        <label for="category">카테고리 선택:</label>
        <select id="category" v-model="placeForm.category">
          <option disabled value="">카테고리를 선택하세요</option>
          <option value="음식점">음식점</option>
          <option value="카페">카페</option>
          <option value="문화">문회</option>
          <option value="액티비티">액티비티</option>
          <option value="산책">산책</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div>
        <label for="address">주소:</label>
        <textarea id="address" v-model="placeForm.address"></textarea>
      </div>
      <div>
        <label for="contact">연락처:</label>
        <textarea id="contact" v-model="placeForm.contact"></textarea>
      </div>
      <div>
        <label for="photos">사진 등록:</label>
        <input type="file" id="photos" @change="handleFileUpload" multiple>
      </div>
      <button type="submit" @click="testPlace">장소 등록</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const placeForm = reactive({
  title: '',
  category: '',
  address: '',
  contact: '',
  photos: []
});

const router = useRouter();

function handleFileUpload(event) {
  placeForm.photos = Array.from(event.target.files);
}

function submitPlace() {
  console.log('장소 데이터:', placeForm);
}

function testPlace () {
  alert('장소가 등록되었습니다.');
  router.push('/place')
}
</script>

<style scoped>
/* 외부 CSS 파일 연결 */
@import url('@/assets/css/place/NewPlace.css');

</style>
