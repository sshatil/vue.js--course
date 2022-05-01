<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul v-if="!isLoading">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <h1 v-else-if="error">{{ error }}</h1>
      <h1 v-else>Loading.......</h1>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: true,
      error: "",
    };
  },
  methods: {
    async loadExperiences() {
      try {
        const res = await fetch(
          "https://vue-http-c65eb-default-rtdb.firebaseio.com/surveys.json"
        );
        const data = await res.json();
        this.results = data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.error = "Failed to fetch data";
      }
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
