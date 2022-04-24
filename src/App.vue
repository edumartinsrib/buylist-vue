
<script >
import headerMain from './components/headerMain.vue'
import modalItens from './components/modalItens.vue'
import listItens from './components/listItens.vue'
import ListItens from './components/listItens.vue'

export default {
    components:{
    headerMain,
    modalItens,
    listItens,
    ListItens
}
}

</script>

<template>
  <div id="app">
    <header>
      <header-main></header-main>
    </header>
    <main class="text-center">
      <button type="button" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar item!</button>
      
      <list-itens></list-itens>

    </main>
    <footer></footer>

    <modal-itens></modal-itens>
  </div>
</template>

<style>
@import "./assets/base.css";

:root {
  --dark: #00092c;
  --grey: #6b7280;
  --purple: #5900ff;
  --blue: #2d46b9;
  --light: #eee;
  --red: #b20600;
  --redDark: #630606;
  --green: #6bcb77;
  --greenDark: #019267;
  --blueDark: #051367;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  background-color: var(--dark);
}

header {
  
  max-width: 678px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

header .logo {
  width: 150px;
  margin: 0 auto;
  text-align: center;
}
.conecta {
  color: #6f5fb5;
}
.nuvem {
  color: #74c5da;
}

#emptyList {
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

header h1 {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--light);
}

#app {
  max-width: 1920px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

a {
  text-decoration: none;

}
</style>
