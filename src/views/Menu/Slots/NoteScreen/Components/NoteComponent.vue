<template>
  <div class="containerBox">
    <div class="leftBox">
      <i class="fa-solid fa-paperclip"></i>
      <div class="textContainer">
        <h3>{{ truncatedText }}</h3>
        <div class="dateInfo">
          <p id="noteDate">11/10/2023</p>
          <span>-</span>
          <p id="noteTime">13:37h</p>
        </div>
      </div>
    </div>
    <button @click="triggerOpenModal" id="btnTrash"><i class="fa-regular fa-trash-can"></i></button>
  </div>
</template>

<script>
export default {
  name: "NoteComponent",
  data() {
    return {
      originalText: "Exp.: Ao ligar falar com Luíza bla teu cum falar aracaju sergipe brasil sao paulo laranjeiras luisa fabio",
    };
  },
  props: {
    openModalFunc: Function,
  },
  methods: {
    triggerOpenModal() {
      if (typeof this.openModalFunc === 'function') {
        this.openModalFunc();  // Chama a função do componente pai para abrir o modal
      } else {
        console.error('openModalFunc não é uma função válida.');
      }
    },
  },
  computed: {
    truncatedText() {
      const maxLength = 30;
      const content = this.originalText.trim();

      if (content.length > maxLength) {
        return content.slice(0, maxLength) + '...';
      } else {
        return content;
      }
    },
  },
};
</script>
    
<style lang="scss" scoped>
@import '/src/assets/scss/_colors.scss';

// Container
.containerBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: lighten($colorWhite, 5%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  padding: 2em;
  max-width: 100%;
  height: 70px;

  // Left box
  .leftBox {
    display: flex;
    flex-direction: row;
    align-items: center;

    // Paperclip icon
    .fa-paperclip {
      color: $colorGray;
      font-size: 20px;
    }

    // Text container
    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 1em;
      border-radius: 10px;

      // Heading
      h3 {
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 0.1em;
        font-family: 'Roboto', sans-serif;
        color: $colorBlack;
        font-size: 14px;
        
      }

      // Date info
      .dateInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: darken($colorGray, 20%);
        font-family: 'Raleway', sans-serif;
        font-size: 12px;

        p {
          margin: 0.2em 0;
        }

        span {
          display: flex;
          align-items: center;
          margin: 0 0.2em;
        }
      }
    }
  }

  // Trash button
  #btnTrash {
    border: none;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    padding: 10px 10px;
    background-color: lighten($colorWhite, 5%);

    &:hover {
      i {
        color: rgba($colorBlack, 0.8);
      }
      cursor: pointer;
    }

    // Trash icon
    .fa-trash-can {
      color: $colorRed;
      font-size: 20px;
    }
  }
}
</style>