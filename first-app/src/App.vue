<template>
  <section>
    <h1>test</h1>
    <new-friend @add-contact="addContact"></new-friend>
    <ul
      v-for="friend in friends"
      :key="friend.id"
      @toggle-favorite="toggleFavoriteStatus"
    >
      <!-- <friend-contact
        name="John"
        email="john@example.com"
        phone="123"
      ></friend-contact> -->
      <friend-contact
        :friend="friend"
        @delete-item="handleDelete"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "John",
          phone: "123-123",
          email: "john@example.com",
          isFavorite: true,
        },
        {
          id: "1",
          name: "juli",
          phone: "123-123",
          email: "juli@example.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus() {
      this.isFavorite = !this.isFavorite;
    },
    addContact(name, email, phone) {
      //   const newFriendContact = {
      //     id: new Date().toISOString(),
      //     name: name,
      //     phone: phone,
      //     email: email,
      //     isFavorite: false,
      //   };
      //   this.friends.push(newFriendContact);
      // },
      this.friends = [
        ...this.friends,
        {
          id: new Date().toISOString(),
          name: name,
          phone: phone,
          email: email,
          isFavorite: false,
        },
      ];
    },
    handleDelete(id) {
      console.log(id);
      this.friends = this.friends.filter((f) => f.id !== id);
    },
  },
};
</script>
