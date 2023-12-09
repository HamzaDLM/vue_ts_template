import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('./views/pages/Home.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('./views/pages/NotFound.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: 'bad-not-found',
        component: () => import('./views/pages/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

// router.beforeEach(to, _) => {
//     const userStore = useUserStore()

//     const MODE = import.meta.env.Mode

//     // Redirect to login if route requires auth and user not logged
//     if (to.meta.requiresAuth && !userStore.isLoggedIn && MODE !== 'dev') {
//         return {
//             path: '/',
//             query: { redirect: to.fullPath },
//         }
//     }
// }

export default router