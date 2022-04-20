<template>
  <BaseCard>
    <BaseDialog
      @close="confirmError"
      v-if="validInput"
      title="Fill all the input fields"
    >
      <template #default>
        <p>Please check all inputs</p>
      </template>
      <template #actions>
        <button>Okay</button>
      </template>
    </BaseDialog>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="titleData" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" type="text" v-model="descriptionData" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" v-model="linkData" />
      </div>
      <div>
        <button type="submit">Add Resource</button>
      </div>
    </form>
  </BaseCard>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
import BaseDialog from "../UI/BaseDialog.vue";
export default {
  components: {
    BaseCard,
    BaseDialog,
  },
  inject: ["addResource"],
  data() {
    return {
      title: "",
      description: "",
      link: "",
      validInput: true,
    };
  },
  methods: {
    handleSubmit() {
      this.title = this.titleData;
      this.description = this.descriptionData;
      this.link = this.linkData;

      if (this.title === "" && this.description === "" && this.link === "") {
        alert("Full all the input fields");
        this.validInput = true;
      } else {
        this.addResource(this.title, this.description, this.link);
      }
    },
    confirmError() {
      this.$validInput = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
