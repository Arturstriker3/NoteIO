<template>
  <header>
    <div class="topbar">
      <h2 @click="openModal">Anotações</h2>
      <button>
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
  </header>

  <main>
    <div class="screenContent">
      <slot name="slot-menu"></slot>
    </div>
  </main>

  <!-- modal -->

  <div id="app">
    <transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              Persistência de Dados
            </div>
            <div class="modal-line"></div>
            <div class="modal-body">
              <div>
                <label for="persistCheckbox">Persistir meus dados:</label>
                <input
                  type="checkbox"
                  id="persistCheckbox"
                  v-model="persistStore.persistData"
                />
                {{ persistStore.persistData }}
                
                <div v-if="persistStore.persistData">
                  <label for="tokenInput">Digite o Token:</label>
                  <input type="text" id="tokenInput" v-model="token" />
                  <button @click="retrieveNotes">Recuperar Notas</button>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="modal-default-button" id="modal-cancel-btn" @click="closeModal">
                Fechar
              </button>

              <!-- Botão condicional -->
              <button v-if="persistStore.persistData" @click="handleConditionalButtonClick">
                Gerar Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { usePersistStore } from '@/stores/persist';
import { retrieveNotes, deleteIndexDB, addNotesToIndexDB } from './Js/importData';

export default {
  name: 'MenuView',
  data() {
    return {
      showModal: false,
      token: '',
      notes: [],
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleConditionalButtonClick() {
      console.log('Botão condicional clicado!');
    },
    async retrieveNotes() {
      try {
        // Utilize diretamente o método retrieveNotes do módulo api.js
        this.notes = await retrieveNotes(this.token);
        
        // Utilize diretamente os métodos deleteIndexDB e addNotesToIndexDB do módulo api.js
        await deleteIndexDB();
        await addNotesToIndexDB(this.notes);
        
        console.log('Notas recuperadas:', this.notes);
      } catch (error) {
        console.error('Erro ao recuperar notas:', error);
      }
    },
  },
  computed: {
    persistStore() {
      return usePersistStore();
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>