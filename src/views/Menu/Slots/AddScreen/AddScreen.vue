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
            <input v-model="note.reminder" id="date" type="date" @input="updateReminder" />
          </div>

          <div class="footBtn">
            <button id="btnTrash" @click.prevent="closeAdd"><i class="fa-regular fa-trash-can"></i></button>
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
import saveNote from "./Js/noteSave";
import handleNumberInput from './Js/inputNumber';
import handleDateInput from './Js/handleDateInput';
import checkAndRedirect from './Js/dinamicRoutes';
import router from '@/router/index'; // Importe o objeto router do Vue Router

export default {
  name: "AddScreen",
  data() {
    return {
      note: {
        id: null,
        text: "",
        potential: "00,00",
        category: "Tranquilo",
        reminder: "",
        timestamp: null
      }
    };
  },
  created() {
    initDatabase();
  },
  methods: {
    async onSaveNote() {
      await saveNote(this);
      router.push('/notes');
    },

    handleInput(event) {
      this.note.potential = handleNumberInput(event);
    },

    updateReminder() {
      handleDateInput(this.note);
    },

    closeAdd() {
      // Redirecionar sem verificar a nota
      checkAndRedirect();
    },

    resetForm() {
      this.note = {
        id: null,
        text: "",
        potential: "00,00",
        category: "Tranquilo",
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