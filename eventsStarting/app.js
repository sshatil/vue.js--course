const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   }
    //   {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   }
    //   {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitForm");
    },
    setName(e) {
      this.name = e.target.value;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
