<template>
  <button @click="toggleAddTask" class="btn" :style="{ background: color }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    toggleAddTask() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>
