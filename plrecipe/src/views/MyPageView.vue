<template>
    <div id="member-info">
        <div id="profile">
            <img src="/src/assets/img/plrecipe_panda.png" alt="판다">
            <p id="nickname">말랑판다</p>
        </div>
        <table id="follow">
            <tr id="name">
                <td>팔로잉</td>
                <td>팔로워</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
            </tr>
        </table>
    </div>
    <div class="container">
        <div>
            <a href="" title="Button post" class="button post" @click="goPage">게시글</a>
            <a href="" title="Button group" class="button group" @click="goPage">그룹</a>
        </div>
        <div>
            <a href="" title="Button like" class="button like" @click="goPage">좋아요</a>
            <a href="" title="Button star" class="button star" @click="goPage">별점</a>
        </div>
    </div>
</template>

<script setup>

const goPage = () => {
  alert('준비중입니다🐹');
};

</script>

<style scoped>
@import url('@/assets/css/MyPage.css');
</style>