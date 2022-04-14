<template>
  <li>
    <h2>
      {{ friend.name }} {{ friend.isFavorite ? "favorite" : "not favorite" }}
    </h2>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreaVisible">
      <li><strong>Phone</strong>{{ phone }}</li>
      <li><strong>Phone</strong>{{ email }}</li>
    </ul>
    <button @click="$emit('delete-item', friend.id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: ["friend"],
  emits: ["delete-item"],
  // props: {
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   email: String,
  //   phone: String,
  // },
  data() {
    return {
      detailsAreaVisible: false,
      // friend: {
      //   id: "1",
      //   name: "John",
      //   phone: "123-123",
      //   email: "john@example.com",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreaVisible = !this.detailsAreaVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", "1");
    },
  },
};
</script>

<style></style>
