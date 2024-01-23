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
                
                Meu Token:
                {{  }}
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

export default {
  name: 'MenuView',
  data() {
    return {
      showModal: false,
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
      // Lógica a ser executada quando o botão condicional for clicado
      console.log('Botão condicional clicado!');
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
  
<style lang="scss" src="./style.scss"></style>@/stores/persist