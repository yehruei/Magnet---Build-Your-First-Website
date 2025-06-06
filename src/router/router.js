import { createWebHashHistory, createRouter } from "vue-router";
import Layout from "../components/Layout/layout.vue"
import home from "../components/home/home.vue"

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: "",
                name: "Home",
                component: home
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory('/Magnet---Build-Your-First-Website/'),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;