<template>
  <div class="new-post-container">
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">제목:</label>
        <input type="text" id="title" v-model="postForm.title">
      </div>
      <div>
        <label for="people">인원 선택:</label>
        <select id="people" v-model="postForm.people">
          <option disabled value="">선택해주세요</option>
          <option value="1인">1인</option>
          <option value="2인">2인</option>
          <option value="다수">다수</option>
        </select>
      </div>
      <div>
        <label for="content">내용:</label>
        <textarea id="content" v-model="postForm.content"></textarea>
      </div>
      <div>
        <label for="photos">사진 등록:</label>
        <input type="file" id="photos" @change="handleFileUpload" multiple>
      </div>
      <div>
        <label for="hashtags">해시태그 (쉼표로 구분):</label>
        <input type="text" id="hashtags" v-model="hashtagsInput" @blur="splitHashtags">
      </div>
      <button type="submit" @click="testPost">게시글 작성</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const postForm = reactive({
  title: '',
  people: '',
  content: '',
  photos: [],
  hashtags: []
});

const hashtagsInput = ref('');
const router = useRouter();

function splitHashtags() {
  postForm.hashtags = hashtagsInput.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
}

function handleFileUpload(event) {
  postForm.photos = Array.from(event.target.files); // 선택된 파일들을 postForm.photos 배열에 저장
}

function submitPost() {
  console.log('게시글 데이터:', postForm);
  // 게시글 데이터를 서버에 전송하거나 저장하는 로직을 여기에 추가
}

function testPost () {
  alert('게시글이 등록되었습니다.');
  router.push('/post/detail')
}
</script>

<style scoped>
/* 외부 CSS 파일 연결 */
@import url('@/assets/css/post/NewPost.css');

</style>
