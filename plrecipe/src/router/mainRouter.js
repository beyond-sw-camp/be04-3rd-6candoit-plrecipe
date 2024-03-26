import {createRouter, createWebHistory} from 'vue-router';

import PlaceView from '@/views/place/PlaceView.vue';
import MainView from '@/views/MainView.vue';
import PlaceMainView from '@/views/place/PlaceMainView.vue';
import PlaceDetailView from '@/views/place/PlaceDetailView.vue';

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
            component: PlaceView,
            children:[
                {
                    path: '',
                    component: PlaceMainView
                },
                {
                    path: 'view',
                    component: PlaceDetailView
                }
            ]
        }
    ]
});

export default router;