<template>
  <h2>Mange goals</h2>
  <input type="text" v-model="formData" />
  <button @click="addGoals">Add</button>
  <teleport to="body">
    <ErrorAlert v-if="error">
      <h1>Input Something</h1>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      error: true,
    };
  },
  methods: {
    addGoals() {
      if (this.formData === "") {
        this.error = true;
      }
    },
  },
};
</script>
