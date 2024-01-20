<template>
  <MenuView>
    <template v-slot:slot-menu>

      <div class="app">
        <div class="menu-toggle">
          <div class="hamburger">
            <span></span>
          </div>
        </div>

        <aside class="sidebar">
          <h3>Menu</h3>
          
          <nav class="menu">
            <a href="#" class="menu-item is-active">Artigo 1</a>
            <a href="#" class="menu-item">Artigo 2</a>
            <a href="#" class="menu-item">Artigo 3</a>
            <a href="#" class="menu-item">Artigo 4</a>
          </nav>

        </aside>

        <main class="content">
          <h1>Welcome, Human</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, explicabo!</p>
        </main>
      </div>

    </template>
  </MenuView>
</template>
  
<style lang="scss" src="./style.scss"></style>

<script>
import MenuView from "../../MenuView.vue";
import NoteComponent from './Components/NoteComponent.vue';

export default {
  name: "NoteScreen",
  components: {
    MenuView,
    NoteComponent,
  },
};
</script>