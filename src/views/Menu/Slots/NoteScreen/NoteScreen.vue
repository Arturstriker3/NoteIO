<template>
  <MenuView>
    <template v-slot:slot-menu>
      <div class="app">
        <div class="menu-toggle" ref="menuToggle" @click="handleToggleClickWrapper">
          <div class="hamburger">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <aside class="sidebar" ref="sidebar">
          <h3>Minhas Notas</h3>
          <nav class="menu">
            <a href="#" class="menu-item is-active">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
            <a href="#" class="menu-item">
              <NoteComponent/>
            </a>
          </nav>
          <button class="bgBtn">
            <i class="fa-solid fa-plus"></i>
            Criar anotação
          </button>
        </aside>

        <main class="content">
          <h1>Welcome, Human</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, explicabo!</p>
        </main>
      </div>
    </template>
  </MenuView>
</template>

<script>
import MenuView from "../../MenuView.vue";
import NoteComponent from './Components/NoteComponent.vue';


import { handleToggleClickWrapper } from './Js/toggle';
import { handleResize } from './Js/resizeHandler';

export default {
  name: "NoteScreen",
  components: {
    MenuView,
    NoteComponent,
  },
  methods: {
    handleToggleClickWrapper() {
      handleToggleClickWrapper(this);
    },
    disableSidebarOnResize() {
      handleResize(this);
    },
  },

  mounted() {
    window.addEventListener('resize', this.disableSidebarOnResize);
  },

  // Substitua beforeDestroy por beforeUnmount
  beforeUnmount() {
    window.removeEventListener('resize', this.disableSidebarOnResize);
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
