<template>
  <MenuView>
    <template v-slot:slot-menu>
      <div class="app">

        <!-- modal -->

        <div id="app">
          <transition name="modal">
            <div v-if="showModal" class="modal-mask">
              <div class="modal-wrapper">
                <div class="modal-container">
                  <div class="modal-header">
                    Deseja excluir esta anotação ?
                  </div>
                  <div class="modal-line"></div>
                  <div class="modal-body">
                    Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita. Tem certeza que deseja excluí-la?
                  </div>
                  <div class="modal-footer">
                    <button class="modal-default-button" id="modal-delete-btn" @click="handleDelete">
                      Excluir
                    </button>
                    <button class="modal-default-button" id="modal-cancel-btn" @click="closeModal">
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div class="menu-toggle" ref="menuToggle" @click="handleToggleClickWrapper">
          <div class="hamburger">
            <i class="fa-solid fa-eye"></i>
          </div>
        </div>

        <aside class="sidebar" ref="sidebar">
          <h3>Minhas Notas</h3>
          <nav class="menu">
            <a class="menu-item " v-for="(note, id) in notes" :key="id">
              <NoteComponent :note="note" @deleteNote="deleteNote" />
            </a>
          </nav>
            <button @click="$router.push('/add')" class="bgBtn">
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
import { loadNotesFromIndexDB } from './Js/noteLoad';
import { deleteNoteHelper, handleDeleteHelper } from './Js/noteDelete';

export default {
  name: "NoteScreen",
  components: {
    MenuView,
    NoteComponent,
  },
  data() {
    return {
      showModal: false,
      notes: {},
      noteToDelete: null,
    };
  },
  methods: {
    handleToggleClickWrapper() {
      handleToggleClickWrapper(this);
    },
    disableSidebarOnResize() {
      handleResize(this);
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    
    async loadNotesFromIndexDB() {
      await loadNotesFromIndexDB(this);
    },

    async deleteNote({ id, timestamp }) {
      await deleteNoteHelper(this, { id, timestamp });
    },

    async handleDelete() {
      await handleDeleteHelper(this);
    },
},

  mounted() {
    window.addEventListener('resize', this.disableSidebarOnResize);
    this.loadNotesFromIndexDB();
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.disableSidebarOnResize);
  },
};
</script>

<style lang="scss" src="./style.scss"></style>

./Js/noteLoad