<template>
  <div>
    <!-- A diretiva v-for renderiza vários elementos em um loop, precisa de uma key única para identificar cada um. Pode ser task in tasks (elemento dentro de um array) ou também (task, index) in tasks, que além do elemento tambem gera um index único (que pode ser utilizado como chave)  -->
    <div v-for="(task, index) in tasks" :key="index">
      <Task
        :task="task"
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
      />
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },

    toggleReminder(id) {
      this.$emit("toggle-reminder", id);
    },
  },
};
</script>
