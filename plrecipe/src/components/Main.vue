<template>
    <div class="container">
    <div class="big-image-container">
        <img src="@/assets/img/main.png" alt="메인 이미지" class="big-image">
        <div class="image-text">
        <h1>Plrecipe</h1>
        <br><br>
        <p>
            플레시피(Play + Recipe)는 사용자에게 다양한 놀거리를 제공하는 서비스 입니다.<br>
            나만의 코스들을 조합해 다른 회원들과 공유하고 추억을 쌓아보세요!
        </p>
        </div>
    </div>

    <div class="small-images">
        <div class="image-container small-image1" @click="goPost">
        <img src="@/assets/img/post.png" alt="왼쪽 이미지">
        <div class="overlay-text">
            <div class="overlay-title">게시판</div>
            <div class="overlay-description">다양한 코스를 구성해보세요.</div>
        </div>
        </div>

        <div class="image-container small-image2" @click="goPlace">
        <img src="@/assets/img/place.png" alt="오른쪽 이미지">
        <div class="overlay-text">
            <div class="overlay-title">장소</div>
            <div class="overlay-description">다양한 장소를 구경해보세요.</div>
        </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goPost = () => {
    router.push('/post');
};
const goPlace = () => {
    router.push('/place');
};
</script>

<style scoped>
@import url('@/assets/css/main/Main.css');
</style>