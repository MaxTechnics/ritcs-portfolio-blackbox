import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Start Page',
            meta: { title: 'Portfolio' },
            // route level code-splitting
            // this generates a separate chunk (thing.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/StudentView.vue'),
        },
        {
            path: '/projects',
            name: 'Projects',
            meta: { title: 'Projecten' },
            component: () => import('@/views/ProjectView.vue'),
        },
        {
            path: '/project/:id',
            name: 'Project Detail',
            meta: { title: 'Project' },
            component: () => import('@/views/ProjectDetailView.vue'),
        },
        {
            path: '/functions',
            name: 'Functions',
            meta: { title: 'Functies' },
            component: () => import('@/views/JobView.vue'),
        },
        {
            path: '/students',
            name: 'Students',
            meta: { title: 'Studenten' },
            component: () => import('@/views/StudentView.vue'),
        },
        {
            path: '/student/:name',
            name: 'Student Detail',
            meta: { title: 'Student' },
            component: () => import('@/views/StudentDetailView.vue'),
        },
        {
            path: '/config',
            name: 'Config',
            meta: { title: 'Conf' },
            component: () => import('@/views/ConfigView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404 Page',
            redirect: '/'
        }
    ]
});

const DEFAULT_TITLE = 'oh look, max fucked up';
router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string || DEFAULT_TITLE;
    next();
});

export default router;
