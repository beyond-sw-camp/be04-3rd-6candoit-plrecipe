<template>
    <div class="new-star-container">

        <form @submit.prevent="submitStar">
            <div>
                <p id="name"> {{ placeData.placeName }} </p>
            </div>
            <div>
                <p id ="location">{{ placeData.placeLocation }}</p>
            </div>
            <div>
                <label for="starSelect">별점 선택 : </label>
                <select id="starSelect" v-model="starForm.rating" >
                    <option disabled value="">선택해주세요</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>
            </div>
            <div>
                <label for="content">코멘트:</label>
                <textarea id="content" v-model="starForm.comment"></textarea>
            </div>
            <button type="submit" @click="testStar">별점 작성</button>
        </form>
    </div>
</template>

<script setup>
import { reactive, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  placeData: Array
});

const starForm = reactive({
    placeName: '',
    location: '',
    rating: '',
    comment: ''
});

const router = useRouter();

function submitStar() {
    starForm.placeName = props.placeData.placeName;
    starForm.location = props.placeData.placeLocation;

    console.log('별점 데이터:', starForm);
}

function testStar() {
    alert('별점이 등록되었습니다.');
    submitStar();
    router.push({
        path: '/place/viewStar',
        query: starForm
    })
}

</script>

<style scoped>
@import url('@/assets/css/place/NewStar.css');
</style>