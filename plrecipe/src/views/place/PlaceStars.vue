<template>
    <div id="stars">
      <div class="star-block" v-for="star in starBlocks" :key="star.id">
        <div class="img">
          <!-- <img src="/img/ham.jpeg" alt="Member"> -->
        </div>
        <div class="star-info">
          <p class="member-nickname">{{ star.member.memberNickname }}</p>
          <p class="star">
            <span class="star-span" v-for="n in Math.floor(star.starPoint)" :key="`star-${n}`">★</span>
            <span class="star-span" v-for="n in (5 - Math.ceil(star.starPoint))" :key="`empty-star-${n}`">☆</span>
          </p>
          <div class="comment">{{ star.starComment }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const starBlocks = reactive([
    // 여기에 starBlocks 데이터를 삽입합니다.
    { id: 1, member: { memberNickname: '회원1' }, starPoint: 4.5, starComment: '코멘트입니다.' }
  ]);
  </script>
  
  <style scoped>
  .comment {
    margin: 10px;
    padding: 10px;
    width: 400px;
    height: 80px;
    border-radius: 10px;
    background-color: lightblue;
  }
  
  .star, .member-nickname {
    font-size: 15px;
    float: left;
    margin: 10px;
  }
  
  .star-span {
    color: yellow;
  }
  
  .star-block .img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    float: left;
    margin: 10px;
  }
  
  .star-block {
    width: 600px;
    height: 150px;
    border: lightblue solid 1px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    position: relative;
  }
  
  #stars {
    margin: auto;
  }
  </style>