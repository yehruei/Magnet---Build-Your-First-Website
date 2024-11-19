import { createWebHashHistory, createRouter } from "vue-router";
import store from "../store/store";
import Layout from "../components/Layout/layout.vue"
import mLayout from "../components/Layout/mLayout.vue"
import home from "../components/home/home.vue"
import project from "../components/project/project.vue"
import blog from "../components/blog/blog.vue"
import about from "../components/about/about.vue"

const routes = [
    {
        path: "/",
        name: "landing",
        component: store.state.display.isMobile ? mLayout : Layout,
        children: [
            {
                path: "",
                name: "home",
                component: home
            },
            {
                path: "project",
                name: "project",
                component: project
            },
            {
                path: "blog",
                name: "blog",
                component: blog
            },
            {
                path: "about",
                name: "about",
                component: about
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