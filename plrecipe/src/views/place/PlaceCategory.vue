<template>
    <div class="category">
    <div id="All">전체</div>
    <div id="food">음식점</div>
    <div id="cafe">카페</div>
    <div id="culture">문화</div>
    <div id="activity">액티비티</div>
    <div id="walk">산책</div>
    <div id="etc">기타</div>
  </div>
  </template>
  
  <script setup>

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