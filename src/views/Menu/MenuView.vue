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
import Dexie from 'dexie';
import axios from 'axios'; // Importe o Axios para fazer requisições HTTP

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
        const response = await axios.get(`http://localhost:3000/api/annotations?token=${this.token}`);
        this.notes = response.data;

        await this.deleteIndexDB();
        await this.addNotesToIndexDB(this.notes);

        console.log('Notas recuperadas:', this.notes);
      } catch (error) {
        console.error('Erro ao recuperar notas:', error);
      }
    },
    async deleteIndexDB() {
      const db = new Dexie('LocalNotes');
      await db.delete();
      console.log('IndexDB apagado');
    },
    async addNotesToIndexDB(notes) {
      const db = new Dexie('LocalNotes');
      db.version(1).stores({
        notes: '++id, category, potential, reminder, text, timestamp',
      });

      // Simplificar as notas antes de adicioná-las ao IndexedDB
      const simplifiedNotes = notes.map(({ id, category, potential, reminder, text, timestamp }) => ({
        id, category, potential, reminder, text, timestamp
      }));

      await db.notes.bulkAdd(simplifiedNotes);
      console.log('Notas adicionadas ao IndexDB');
    }
  },
  computed: {
    persistStore() {
      return usePersistStore();
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>