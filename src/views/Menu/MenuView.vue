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
                  {{ persistStore.actualToken }}
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

              <button @click="sendIndexedDBDataToAPI">
                Guardar Dados
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
import axios from 'axios';
import Dexie from 'dexie';

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

    async handleConditionalButtonClick() {
      try {
        // Faça uma requisição para a rota do backend que gera um novo token
        const response = await axios.post('http://localhost:3000/api/generate-token');
        const newToken = response.data.token;

        // Utilize diretamente a propriedade computada persistStore para obter o store
        const persistStore = this.persistStore;
        
        // Atualize o token no estado global (pinia)
        persistStore.setActualToken(newToken);

        console.log('Novo token gerado:', newToken);
      } catch (error) {
        console.error('Erro ao gerar token:', error);
      }
    },

    async retrieveNotes() {
      try {
        // Utilize diretamente o método retrieveNotes do módulo api.js
        this.notes = await retrieveNotes(this.token);

        // Atualize o actualToken com o token fornecido
        usePersistStore().setActualToken(this.token);
        
        // Utilize diretamente os métodos deleteIndexDB e addNotesToIndexDB do módulo api.js
        await deleteIndexDB();
        await addNotesToIndexDB(this.notes);
        
        console.log('Notas recuperadas:', this.notes);
      } catch (error) {
        console.error('Erro ao recuperar notas:', error);
      }
    },

    async sendIndexedDBDataToAPI() {
      try {
        // Utilize diretamente a propriedade computada persistStore para obter o store
        const persistStore = this.persistStore;

        // Configure o banco de dados IndexedDB usando Dexie
        const db = new Dexie('LocalNotes');
        db.version(1).stores({
          notes: '++id, text, potential, category, reminder, timestamp',
        });

        // Busque todos os dados do IndexedDB
        const allNotes = await db.notes.toArray();

        // Atualize a URL para a rota PATCH
        const apiUrl = `http://localhost:3000/api/send-notes/${persistStore.actualToken}`;

        // Utilize o método PATCH em vez de POST
        const response = await axios.patch(apiUrl, { notes: allNotes });

        if (response.status >= 200 && response.status < 300) {
          console.log('Dados enviados para o banco de dados com sucesso:', response.data);
        } else {
          console.error('Erro ao enviar dados para o banco de dados. Status:', response.status);
        }
      } catch (error) {
        console.error('Erro ao enviar dados para o banco de dados:', error);
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