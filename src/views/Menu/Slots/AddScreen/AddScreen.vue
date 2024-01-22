<template>
  <MenuView>
    <template v-slot:slot-menu>
      <div class="formScreen">
        <form class="formItens" @submit.prevent="onSaveNote">
          <textarea v-model="note.text" id="bgInput" name="text" cols="18" rows="5" placeholder="Exp.: Ao ligar falar com Luiza"></textarea>

          <div class="smlInputs">
            <p>Potencial do negócio</p>
            <input v-model="note.potential" type="text" placeholder="R$ 00,00" @input="handleInput">

            <p>Categorização</p>
            <div class="selectInput">
              <select v-model="note.category">
                <option selected disabled>Categorização</option>
                <option>Crítico</option>
                <option>Importante</option>
                <option>Tranquilo</option>
              </select>
            </div>

            <p>Lembrete</p>
            <input v-model="note.reminder" id="date" type="date"/>
          </div>

          <div class="footBtn">
            <button id="btnTrash" @click="deleteNote"><i class="fa-regular fa-trash-can"></i></button>
            <button id="btnSave" type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </template>
  </MenuView>
</template>
  
<style lang="scss" src="./style.scss"></style>

<script>

import MenuView from "../../MenuView.vue";

import initDatabase from "./Js/initDatabase.js";
import { saveNote } from "./Js/noteSave"
export default {
  name: "AddScreen",
  data() {
    return {
      note: {
        id: null,
        text: "",
        potential: "",
        category: null,
        reminder: "",
        timestamp: null
      }
    };
  },
  created() {
    initDatabase();
  },
  methods: {
    onSaveNote() {
      saveNote(this);
    },

    handleInput(event) {
      // Remova todos os caracteres que não são números
      let value = event.target.value.replace(/\D/g, '');

      // Remova zeros à esquerda
      value = value.replace(/^0+/, '');

      // Adicione zeros à esquerda, se necessário
      value = value.padStart(3, '0');

      // Adicione uma vírgula para representar os centavos
      value = value.slice(0, -2) + ',' + value.slice(-2);

      // Adicione pontos como separadores de milhares
      const parts = value.split(',');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      // Atualize o valor no modelo
      this.note.potential = `R$ ${parts.join(',')}`;
    },

    resetForm() {
      this.note = {
        id: null,
        text: "",
        potential: "",
        category: null,
        reminder: "",
        timestamp: null
      };
    }
  },
  components: {
    MenuView,
  },
};
</script>