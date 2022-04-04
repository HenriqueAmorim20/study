<template>
  <div>
    <!-- Nesses casos são passadas props para os componentes AddTask e Tasks, pode-se utilizar um v-bind ":" antes do nome da props para que ela seja reativa -->
    <!-- Também utiliza-se @ para eventos, nesse caso, espera-se que sejam emitidos eventos nos componentes filhos, esses eventos são capturados aqui e direcionados a alguma ação -->
    <AddTask v-show="showAddTask" @add-task="addTask" />
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },

  // When this hooks is called, the following have been set up: reactive data, computed properties, methods, and watchers. However, the mounting phase has not been started, and the $el property will not be available yet.
  created() {
    this.fetchTasks();
  },

  // Methods onde são declaradas todas as funções do componente
  methods: {
    async fetchTasks() {
      const res = await fetch("api/tasks");

      this.tasks = await res.json();
    },

    async fetchTask(id) {
      const res = await fetch("api/tasks/" + id);

      const data = await res.json();

      return data;
    },

    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      console.log(task);

      this.tasks = [...this.tasks, data];
    },

    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch("api/tasks/" + id, {
          method: "DELETE",
        });

        res.status === 200 ? this.fetchTasks() : alert("Error deleting task");
      }
    },

    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch("api/tasks/" + id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });

      const data = await res.json();

      this.fetchTasks();
    },
  },
};
</script>
