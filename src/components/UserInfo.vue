<template>
  <BaseCard>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
    </template>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

<script>
import BaseBadge from "./BaseBadge.vue";
import BaseCard from "./BaseCard.vue";
export default {
  components: {
    BaseBadge,
    BaseCard,
  },
  props: ["fullName", "infoText", "role"],
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
