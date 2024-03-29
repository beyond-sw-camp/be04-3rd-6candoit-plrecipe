<script setup>
import { ref, onMounted, defineProps } from 'vue';

import { useRouter } from 'vue-router';

const router = useRouter();
const placeDetail = (id) => {
  router.push(`/place/detail/${id}`);
};

  const posts = ref([]);
  const post = ref(null);
  const num = ref('☆');

const props = defineProps({
  id: Array
});

  const categoryColors = {
    '음식점': '#93ACB5',
  '카페': '#96C5F7',
  '문화': '#A9D3FF',
  '액티비티': '#CEE4FF',
  '기타': '#E0ECFF',
  '산책': '#F2F4FF',
};
  
  const postLike = function()  {
    if (num.value == '☆') {
      num.value = '⭐';
    } else {
    num.value = '☆';
   } 
  } 

  onMounted(async () => {
    const response = fetch('http://localhost:3000/post')
                    .then(response => response.json());
    const data = await response;

    const selected = data.find(post => post.postId == props.id);
    post.value = selected;
    console.log(post.value);
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
  return categoryColors[categoryName] || '#FFFFFF'; 
};
</script>
<template>

<div id="app" v-if="post">
      <div class="sidebar">
      <div 
        class="sidebar-item"
        v-for="course in post.course"
        :key="course.placeId"
        @click="placeDetail(course.placeId)"
        :style="{ backgroundColor: getCategoryColor(course.placeCategory.placeCategoryName) }">
        {{ course.placeName }}
      </div>
    </div>
        <div class="post-container">
            <div>
                <div id="post-title">{{ post.postTitle }}</div>
                <div id="post-writer">
                    <img id="member-image" src="@/assets/img/프로필.jpg">
                    <span id="post-nick">{{ post.memberNickname }}</span>
                    <span id="post-member-count">{{ getMemberCountText(post.memberCount) }}</span>
                </div>
                <ul class="post-image">
  <li>
    <img src="@/assets/img/1_신라호텔.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/2_수영장.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/3_점심.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/4_점심.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/5_수영장.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/6_저녁.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/7_저녁.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/8_시장.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/9_시장.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/10_야식.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/11_베이커리.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/12_베이커리.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/13_수영장.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/14_수빈.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/15_수빈.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/16_수빈.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/17_수빈.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/18_본지르르.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/19_본지르르.jpg" alt="">
  </li>
  <li>
    <img src="@/assets/img/20_본지르르.jpg" alt="">
  </li>
</ul>

                <div id="post-content">{{ post.postContent }}</div>
                <div class="like">
                  <div class="post-like" @click="postLike">
                    <h3>{{ num }}</h3>
                  </div>
                </div>
                <div id="hashtag">
                <span v-for="hashtag in post.hashtag" :key="hashtag.hashtagId">
                    #{{ hashtag.hashtagTitle }}
                </span>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('@/assets/css/post/SelectPost.css');
</style>
