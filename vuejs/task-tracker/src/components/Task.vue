<template>
  <!-- Evento de double click -->
  <div
    @dblclick="onDblclick"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i class="fas fa-times" @click="onDelete"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },

  methods: {
    onDelete() {
      this.$emit("delete-task", this.task.id);
    },
    onDblclick() {
      this.$emit("toggle-reminder", this.task.id);
    },
  },
};
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
