<template>
    <div id="stars">
        <div class="star-block" v-for="star in starBlocks" :key="star.id">
            <div class="img">
                <img :src="`/src/assets/img/member/ham${(star.member.memberId%7)+1}.jpg`" alt="Member">
            </div>
            <div class="star-info">
                <p class="member-nickname">{{ star.member.memberNickname }}</p>
                <p class="star">
                    <span class="star-span" v-for="n in Math.floor(star.starPoint)" :key="`star-${n}`">★</span>
                    <span class="star-span" v-for="n in (5 - Math.ceil(star.starPoint))"
                        :key="`empty-star-${n}`">☆</span>
                </p>
                <!-- <div class="comment">{{ star.starComment }}</div> -->
                <p class="comment">{{ star.starComment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    starBlocks: Array
});

</script>

<style scoped>

#img,
#etc {
    width: 20%;
}

table img {
    width: 180px;
    margin: auto;
}

.star,
.member-nickname {
    font-size: 15px;
    float: left;
    margin: 25px;
}

.star-span {
    color: yellow;
}

.star-block img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    float: left;
}

.star-block .comment {

}

.star-block {
    width: 680px;
    height: 120px;
    border: lightblue solid 1px;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    position: relative;
}

#stars {
    margin: auto;
}

#star-info {
    float: left;
}
</style>