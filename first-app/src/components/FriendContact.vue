<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreaVisible">
      <li><strong>Phone</strong>{{ friend.phone }}</li>
      <li><strong>Phone</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreaVisible: false,
      friend: {
        id: "1",
        name: "John",
        phone: "123-123",
        email: "john@example.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreaVisible = !this.detailsAreaVisible;
    },
  },
};
</script>

<style></style>
