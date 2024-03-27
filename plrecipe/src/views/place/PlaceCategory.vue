<template>
    <div class="category">
    <div id="All" @click="emit('change(0)')"><button>전체</button></div>
    <div id="food" @click="emit('change(1)')">음식점</div>
    <div id="cafe" @click="emit('change(2)')">카페</div>
    <div id="culture" @click="emit('change(3)')">문화</div>
    <div id="activity" @click="emit('change(4)')">액티비티</div>
    <div id="walk" @click="emit('change(5)')">산책</div>
    <div id="etc" @click="emit('change(6)')" >기타</div>
  </div>
  </template>
  
  <script setup>
import { defineEmits } from 'vue';

/* 부모로부터 물려받은 toggle이라는 이름의 이벤트를 호출할 수 있는 함수 반환받기(defineEmits를 활용하며 배열로 이벤트 이름 작성) */
const emit = defineEmits(['change']);
  </script>
  
  <style scoped>
  .category div{
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: #ffffff;
    border: #646464 solid 1px;
    border-radius: 10px 10px 0px 0px;
    float: left;
    
}

.category{
  margin: auto;
}

#food{
    background-color: lightpink;
}

#cafe{
    background-color: lightyellow;
}

#culture{
    background-color: lightgreen;
}

#activity{
    background-color: lightblue;
}

#walk{
    background-color: rgba(212, 170, 255, 0.952);
} 
#etc{
    background-color: lightgray;
}


  </style>