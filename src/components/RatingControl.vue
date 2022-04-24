<template>
  <ul>
    <li :class="{ active: activeBtn === 'poor' }">
      <button type="button" @click="handleBtn('poor')">Poor</button>
    </li>
    <li :class="{ active: activeBtn === 'average' }">
      <button type="button" @click="handleBtn('average')">Average</button>
    </li>
    <li :class="{ active: activeBtn === 'great' }">
      <button type="button" @click="handleBtn('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RatingControl",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      activeBtn: null,
    };
  },
  methods: {
    handleBtn(btn) {
      this.activeBtn = btn;
      this.$emit("update:modelValue", btn);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: red;
}
.active button {
  color: Purple;
}
</style>
