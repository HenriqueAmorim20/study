Arquivo raiz do projeto
<template>
  <div class="container">
    <!-- Nesse caso são passadas 3 props para o componente Header, pode-se utilizar um v-bind ":" antes do nome da props para que ela seja reativa -->
    <!-- Também utiliza-se @ para eventos, nesse caso um evento que vem do component Header, que é utilizado no component pai App.vue -->
    <Header
      title="Task Tracker"
      @toggle-add-task="showAddTask = !showAddTask"
      :show-add-task="showAddTask"
    />

    <!-- Onde são montadas as rotas do projeto, pode-se passar props para esse rota, essas props podem ser capturadas em qualquer view/page -->
    <router-view :showAddTask="showAddTask"></router-view>

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  // Deve-se declarar todos os component que serão utilizados
  components: {
    Header,
    Footer,
  },
  // Todas as variáveis do component são retornados como um objeto da função data()
  data() {
    return {
      showAddTask: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
