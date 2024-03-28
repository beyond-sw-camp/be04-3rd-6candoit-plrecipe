<template>
  <div class="create">
    <button id="create-post" @click="createPost">게시글 작성</button>
  </div>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.postId" @click="postDetail">
      <div class="title"><p>{{ post.postTitle }}</p></div>
      <div class="image">
        <img :src='post.postImage'/>
      </div>
      <div class="member"><p>인원수: {{ getMemberCountText(post.memberCount) }}</p></div>
      <div class="hashtag">
        <p>해시태그: 
          <span v-for="hashtag in post.hashtag" :key="hashtag.hashtagId">
            #{{ hashtag.hashtagTitle }}
          </span>&nbsp;
        </p>
      </div>
      <div class="sidebar">
        <div 
        class="sidebar-item"
        v-for="course in post.course"
        :key="course.placeId"
        v-if="posts.length > 0"
        :style="{ backgroundColor: getCategoryColor(course.placeCategory.placeCategoryName) }">
        {{ course.placeCategory.placeCategoryName }}
      </div>
    </div>
  </div>
</div>
<div class="search">
        <select id="people">
          <option value="제목">제목</option>
          <option value="작성자">작성자</option>
          <option value="인원수">인원수</option>
          <option value="해시태그">해시태그</option>
        </select>
  <input type="text" id="input-search">
  <button id="search-post" @click="searchPost">검색</button>
</div>
  <br>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
        
const posts = ref([]);

const categoryColors = {
    '음식점': '#93ACB5',
  '카페': '#96C5F7',
  '문화': '#A9D3FF',
  '액티비티': '#CEE4FF',
  '기타': '#E0ECFF',
  '산책': '#F2F4FF',
};
        
onMounted(async () => {
  const response = fetch('http://localhost:3000/post')
                  .then(response => response.json());
  const data = await response;
  posts.value = data;
  console.log(posts.value);
});

const getMemberCountText = (count) => {
  switch (count) {
    case "ONE":
      return "1인";
    case "TWO":
      return "2인";
    case "MANY":
      return "다수";
    default:
      return count;
  }
};

const getCategoryColor = (categoryName) => {
  return categoryColors[categoryName] || '#FFFFFF'; // 기본 색상은 흰색으로 설정
};

const router = useRouter();

const postDetail = () => {
  router.push('/post/detail');
};
const createPost = () => {
  router.push('/post/new');
};
const searchPost = () => {
  alert('검색 기능 구현 중입니다')
};
</script>
  
<style scoped>
/* 외부 CSS 파일 연결 */
@import url('@/assets/css/post/AllPost.css');
</style>