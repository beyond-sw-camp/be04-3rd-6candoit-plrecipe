<template>
    <div v-if="postId">
        <SelectPost :id="postId"/>
    </div>
</template>

<script setup>
    import SelectPost from '@/components/post/SelectPost.vue'
    import { useRoute } from 'vue-router'
    import { ref} from 'vue'

    const postId = ref(useRoute().params.id);
</script>
