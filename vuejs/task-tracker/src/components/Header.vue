<template>
  <header>
    <h1>{{ title }}</h1>

    <!-- A diretiva v-show renderiza o componente, porém oculta-o com display: none, já a diretiva v-if, renderiza o componente apenas se a condição for satisfeita -->
    <Button
      v-show="homePage"
      @toggle-add-task="toggleAddTask"
      :text="showAddTask ? 'close' : 'Add Task'"
      :color="showAddTask ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  // Maneira de declarar (para utilizar) props que são passadas para o component
  props: {
    title: String,
    showAddTask: Boolean,
  },
  // Outras maneiras de declarar as props
  // props: {
  //   title: {
  //     type: String,
  //     default: "Default text"
  //   }
  // },
  // props: ['title'],
  components: {
    Button,
  },

  // Com as computed properties, é possível combinar vários atributos/variaveis/condições/etc em apenas uma "variavel" computada.
  computed: {
    homePage() {
      return this.$route.path === "/";
    },
  },
  methods: {
    // Essa função emite um evento, que é capturado pelo component pai (deve existir um @toggle-add-task na declaração do componente para que esse evento seja direcionado a alguma ação no component pai).
    toggleAddTask() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
