<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
        <nav>
        <RouterLink to="/" active-class="active" replace>메인</RouterLink>
        <RouterLink to="/post" active-class="active" replace>게시글</RouterLink>
        <RouterLink to="/place" active-class="active" replace>장소</RouterLink>
      </nav> 
  </header>

  <main>
    <RouterView />
    <!-- <Post /> -->
  </main>
</template>

<style>
.active{
  color: steelblue;
}
</style>./views/post/SelectPost.vue