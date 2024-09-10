import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import store from "../store/store";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/Magnet---Build-Your-First-Website", // 这里需要改成你 Github 仓库的名称
        name: "landing",
        component: () => store.state.display.isMobile ? import('../components/Layout/layout.vue') : import('../components/Layout/layout.vue'),
        children: [
            {
                path: "",
                name: "home",
                component: () => import('../components/home/home.vue')
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;