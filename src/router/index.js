import { createRouter, createWebHistory } from "vue-router";
import LoginPanel from "../views/LoginPanel.vue";
import AdminPanel from "../views/Admin.vue";
import StudentPanel from "../views/StudentPanel.vue";
import TeacherPanel from "../views/TeacherPanel.vue";

const routes = [
    {
        path: "/",
        name: "LoginPanel",
        component: LoginPanel,
    },
    {
        path: "/admin",
        name: "AdminPanel",
        component: AdminPanel,
    },
    {
        path: "/student",
        name: "StudentPanel",
        component: StudentPanel,
    },
    {
        path: "/teacher",
        name: "TeacherPanel",
        component: TeacherPanel,
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router