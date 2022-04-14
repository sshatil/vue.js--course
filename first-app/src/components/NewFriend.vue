<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enterName" />
    </div>
    <div>
      <label for="">Phone</label>
      <input type="number" v-model="enterPhone" />
    </div>
    <div>
      <label for="">Email</label>
      <input type="text" v-model="enterEmail" />
    </div>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enterName: "",
      enterEmail: "",
      enterPhone: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit(
        "add-contact",
        this.enterName,
        this.enterEmail,
        this.enterPhone
      );
    },
  },
};
</script>

<style></style>
