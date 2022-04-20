<template>
  <div @click="$emit('close')"></div>
  <dialog open>
    <header>
      <slot name="header">
        <h2>{{ title }}</h2>
      </slot>
    </header>
  </dialog>
  <section>
    <slot></slot>
  </section>
  <menu>
    <slot name="actions"></slot>
  </menu>
</template>

<script>
export default {
  props: ["title"],
  emits: ["close"],
};
</script>

<style></style>
