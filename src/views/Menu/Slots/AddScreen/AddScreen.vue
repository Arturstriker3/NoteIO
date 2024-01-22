<template>
  <MenuView>
    <template v-slot:slot-menu>
      <div class="formScreen">
        <form class="formItens" @submit.prevent="saveNote">
          <textarea v-model="note.text" id="bgInput" name="text" cols="18" rows="5" placeholder="Exp.: Ao ligar falar com Luiza"></textarea>

          <div class="smlInputs">
            <p>Potencial do negócio</p>
            <input v-model="note.potential" type="text" placeholder="R$ 00,00" name="email">

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

import Dexie from 'dexie';
import clone from 'clone';

import MenuView from "../../MenuView.vue";

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
    // Inicialize o banco de dados Dexie no método created
    this.initDatabase();
  },
  methods: {

    async initDatabase() {
      // Inicialize o Dexie para acessar o IndexDB
      const db = new Dexie('LocalNotes');

      // Defina a estrutura da tabela (se ainda não estiver definida)
      db.version(1).stores({
        notes: '++id, text, potential, category, reminder, timestamp',
      });

      console.log('Banco de dados Dexie inicializado.');
    },

    async saveNote() {
      // Gerar um ID único e um timestamp antes de salvar a nota
      this.note.id = await this.generateUniqueId();
      this.note.timestamp = new Date().toISOString();

      // Implementar a lógica para salvar a nota no IndexDB
      await this.saveNoteToIndexDB(this.note);

      // Limpar o formulário após salvar
      this.resetForm();
    },

    async generateUniqueId() {
      // Inicialize o Dexie para acessar o IndexDB
      const db = new Dexie('LocalNotes');

      // Defina a estrutura da tabela (se ainda não estiver definida)
      db.version(1).stores({
        notes: '++id, text, potential, category, reminder, timestamp',
      });

      // Consulte o último ID no IndexDB
      const lastNote = await db.notes.orderBy('id').last();

      // Incrementar o ID
      const newId = lastNote ? lastNote.id + 1 : 0;

      return newId;
    },

    async saveNoteToIndexDB(note) {
    try {
      // Clone profundo da nota para evitar o DataCloneError
      const clonedNote = clone(note);

      // Inicialize o Dexie para acessar o IndexDB
      const db = new Dexie('LocalNotes');

      // Defina a estrutura da tabela (se ainda não estiver definida)
      db.version(1).stores({
        notes: '++id, text, potential, category, reminder, timestamp',
      });

      // Adicione a nota clonada à tabela
      await db.notes.add(clonedNote);
      
      // Redirecione para a rota '/notes'
      this.$router.push('/notes');

      console.log('Nota salva no IndexDB:', clonedNote);
    } catch (error) {
      console.error('Erro ao salvar a nota no IndexDB:', error);
    }
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