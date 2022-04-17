<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoals #default="slotProps">
      <h2>{{ slotProps.goal }}</h2>
    </CourseGoals> -->
    <button @click="handleBtn('active-goals')">Active goals</button>
    <button @click="handleBtn('manage-goals')">Manage goals</button>
    <ActiveGoals />
    <ManageGoals />
    <keep-alive>
      <component :is="handleBtn"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      active: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    handleBtn(type) {
      this.active = type;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
