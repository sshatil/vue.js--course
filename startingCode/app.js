Vue.createApp({
  data() {
    return {
      messageA: "first message",
      messageB: "second message",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.messageA;
      } else {
        return this.messageB;
      }
    },
  },
}).mount("#user-goal");
