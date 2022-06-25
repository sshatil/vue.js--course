import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMember from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    // { path: "/teams", component: TeamsList },
    {
      path: "/teams",
      component: TeamsList,
      children: [{ path: ":teamId", component: TeamMember }],
    },
    { path: "/users", component: UsersList },
    // { path: "/teams/:teamId", component: TeamMember },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
