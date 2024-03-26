<template>
  <div>
    <h3>내가 작성한 게시글</h3>
    <div class="post" v-for="post in posts" :key="post.postId" @click="postDetail">
      <div class="title"><p>{{ post.postTitle }}</p></div>
      <div class="image"></div>
      <div class="member"><p>인원수: {{ getMemberCountText(post.memberCount) }}</p></div>
      <div class="hashtag">
        <p>해시태그: 
          <span v-for="hashtag in post.hashtag" :key="hashtag.hashtagId">
            #{{ hashtag.hashtagTitle }}
          </span>&nbsp;
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
        
const posts = ref([]);
        
onMounted(async () => {
  const response = fetch('http://localhost:8080/post')
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


const router = useRouter();

const postDetail = () => {
  router.push('/post/detail');
};
</script>
  
<style scoped>
/* 외부 CSS 파일 연결 */
@import url('./AllPost.css');
</style>
