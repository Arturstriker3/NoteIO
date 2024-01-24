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
              <div class="persistData">
                <div class="persistArea">
                  <button @click="togglePersistData">Persistir meus dados</button>
                  <span>{{ persistStore.persistData ? 'Ativado' : 'Desativado' }}</span>
                  <!-- {{ persistStore.persistData }} -->
                </div>

                <div class="bringArea">
                  <label for="tokenInput">Digite o Token:</label>
                  <input type="text" id="tokenInput" v-model="token" />
                  <button @click="retrieveNotes">Recuperar</button>
                </div>

                <div>
                  <span>Token atual:</span>
                  {{ persistStore.actualToken }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="modal-default-button" id="modal-cancel-btn" @click="closeModal">
                Fechar
              </button>

              <!-- Botão condicional -->
              <button class="modal-default-button" v-if="persistStore.persistData" @click="handleConditionalButtonClick">
                Gerar Token
              </button>

              <button class="modal-default-button" v-if="persistStore.persistData" @click="sendIndexedDBDataToAPI">
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
import { sendIndexedDBDataToAPI } from './Js/apiService';

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

    togglePersistData() {
      const persistStore = this.persistStore;
      persistStore.setPersistData(!persistStore.persistData);
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
      await sendIndexedDBDataToAPI(this);
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