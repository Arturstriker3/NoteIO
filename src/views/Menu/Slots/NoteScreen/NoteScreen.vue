<template>
  <MenuView>
    <template v-slot:slot-menu>
      <div class="app">
        <div class="menu-toggle" ref="menuToggle" @click="handleToggleClickWrapper">
          <div class="hamburger">
            <i class="fa-solid fa-eye"></i>
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
          <div class="cardBox">
            <h2>Minha Nota</h2>
            <div class="cardContent">
              <div class="contentInfo">
                <div class="contentName">
                  <i class="fa-solid fa-file-lines"></i>
                  <h3>Conteúdo:</h3>
                </div>
                <div class="contentText">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="contentInfo">
                <div class="contentName">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <h3>Potencial:</h3>
                </div>
                <div class="contentText">
                  <p>R$ 1.000.000</p>
                </div>
              </div>
              <div class="contentInfo">
                <div class="contentName">
                  <i class="fa-solid fa-layer-group"></i>
                  <h3>Categorização:</h3>
                </div>
                <div class="contentText">
                  <p>Importante</p>
                </div>
              </div>
              <div class="contentInfo">
                <div class="contentName">
                  <i class="fa-solid fa-bell"></i>
                  <h3>Lembrete:</h3>
                </div>
                <div class="contentText">
                  <p>13/01/2024</p>
                </div>
              </div>

              <div class="noteDate">
                <div class="dateAlign">
                  <i class="fa-solid fa-calendar-plus"></i>
                  <div class="dateInfo">
                    <p>11/10/2023</p>
                    <span>-</span>
                    <p id="noteTime">13:37h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </template>
  </MenuView>
</template>

<script>
import MenuView from "../../MenuView.vue";
import NoteComponent from './Components/NoteComponent.vue';


import handleToggleClickWrapper from './Js/toggle';
import handleResize from './Js/resizeHandler';

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
