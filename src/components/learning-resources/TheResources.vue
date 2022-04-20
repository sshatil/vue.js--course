<template>
  <BaseCard>
    <button @click="setSelectedTab('StoreResources')" :class="storeBtn">
      Stored Resources
    </button>
    <button @click="setSelectedTab('AddResource')" :class="resourceBtn">
      Add Resources
    </button>
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
  <!-- <StoreResources v-if="selectedTab === 'StoreResources'" />
  <AddResource v-if="selectedTab === 'AddResource'" /> -->
</template>

<script>
import StoreResources from "./StoreResources.vue";
import BaseCard from "../UI/BaseCard.vue";
import AddResource from "../learning-resources/AddResource.vue";
export default {
  components: {
    StoreResources,
    BaseCard,
    AddResource,
  },
  data() {
    return {
      selectedTab: "StoreResources",
      storeResources: [
        {
          id: "official-guide",
          title: "official guide",
          description: "The official Vue.js documentation",
          link: "http://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google",
          link: "http://vuejs.org",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storeResources,
      addResource: this.addResource,
    };
  },
  computed: {
    storeBtn() {
      return this.selectedTab === "StoreResources" ? "active" : null;
    },
    resourceBtn() {
      return this.selectedTab === "AddResource" ? "active" : null;
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storeResources.unshift(newResource);
      this.selectedTab = "StoreResources";
    },
  },
};
</script>

<style></style>
