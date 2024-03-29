<template>
    <header class="header">
        <img src="@/assets/img/logo.jpg" alt="PLRECIPE 로고" class="logo" @click="goMain"> 
        <nav class="nav">
            <ul class="nav-list">
                <li class="category" @click="goPage('post')"><b>게시판</b></li>
                <li class="category" @click="goPage('place')"><b>장소</b></li>
                <li class="category" @click="goPage('freePost')"><b>자유게시판</b></li>
                <li class="category" @click="goPage('QnA')"><b>문의</b></li>
                <li class="category" @click="goPage('notice')"><b>공지사항</b></li>
                <li @click="goPage('myPage')">마이페이지</li> 
                <li @click="Logout">로그아웃</li> 
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = (page) => {

  if(page == 'post' || page == 'place' || page == 'myPage'){
    router.push(`/${page}`);
  }
  else
  {
    router.push('/ready')
  }
}

const goMain = () => {
    router.push('/');
};
const goPost = () => {
    router.push('/post');
};
const goPlace = () => {
    router.push('/place');
};
const goFreePost = () => {
  alert('준비중입니다');
};
const goQnA = () => {
  alert('준비중입니다');
};
const goNotice = () => {
  alert('준비중입니다');
};
const goMyPage = () => {
  alert('준비중입니다');
};
const Logout = () => {
  window.location.href = 'http://localhost:8080';
}
</script>

<style scoped>
@import url('@/assets/css/header/Header.css');
</style>