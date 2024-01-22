<template>
    <div id="app">
      <transition name="modal">
        <div v-if="showModal" class="modal-mask" @click="closeModal">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                {{ headerText }}
              </div>
              <div class="modal-line"></div>
              <div class="modal-body">
                {{ bodyText1 }}
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
  </template>
  
<script>

export default {
    props: {
        showModal: Boolean,
    },

    data() {
        return {
            headerText: "Deseja excluir esta anotação ?",
            bodyText1: "Você está prestes a deletar uma anotação e esta ação não poderá ser desfeita. Tem certeza que deseja excluí-la?",
        };
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

        handleDelete() {
            // Lógica para tratar a exclusão
            // ...

            // Fechar o modal após a ação
            this.closeModal();
        },
    },
};

</script>
  
<style lang="scss" scoped>

@import '/src/assets/scss/_colors.scss';

    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
    
    .modal-wrapper {
        min-width: 300px;
        padding: 20px 30px;
        background-color: lighten( $colorWhite, 5%);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        border-radius: 15px;

        .modal-header {
            margin-top: 0;
            color: $colorBlack;
            font-family: 'Roboto', sans-serif;
            font-size: 19px;
        }

        .modal-line {
            margin: 10px 0; /* Espaçamento para a nova linha */
            border-top: 1px solid #ddd; /* Linha horizontal */
        }

        .modal-body {
            margin: 20px 0;
            font-family: 'Raleway', sans-serif;
            font-size: 15px;
        }

        .modal-footer {

            .modal-default-button {
                float: right;
                margin-right: 5px;
                padding: 10px;
                border-radius: 15px;
                transition: color 0.5s ease;
                border: 1px solid $colorBlack;
            }

            #modal-delete-btn {
                background-color: $colorRed;
                font-family: 'Roboto', sans-serif;

                &:hover{
                    cursor: pointer;
                    color: rgba($colorBlack, 0.5);
                }
            }

            #modal-cancel-btn {
                margin-right: 15px;
                background-color: $colorWhite;
                font-family: 'Roboto', sans-serif;

                &:hover{
                    cursor: pointer;
                    color: rgba($colorBlack, 0.8);
                }
            }
        }
    }   
}

</style>
  