const app = Vue.createApp({
  data() {
    return {
      showDetails: false,
      friends: [
        {
          id: "1",
          name: "John",
          phone: "123",
          email: "email@example.com",
        },
        {
          id: "2",
          name: "Julie",
          phone: "123",
          email: "email@example.com",
        },
      ],
    };
  },
  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.component("friend-contact", {
  template: `
        <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleShow">Show Details</button>
          <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: "2",
        name: "Julie",
        phone: "123",
        email: "email@example.com",
      },
    };
  },
  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount("#app");
