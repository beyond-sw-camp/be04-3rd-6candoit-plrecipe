import {createRouter, createWebHistory} from 'vue-router';

import PlaceView from '@/views/place/PlaceView.vue';
import MainView from '@/views/MainView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainView
        },
        {
            path: '/post',
            component: PlaceView
        },
        {
            path: '/place',
            component: PlaceView
        }
    ]
});

export default router;