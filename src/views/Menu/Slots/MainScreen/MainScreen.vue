<template>
    <MenuView>
      <template v-slot:slot-menu>
        
        <div class="content">
          <i class="fa-solid fa-paperclip"></i>
          <div class="textCenter">
            <h3>Anotações</h3>
            <p>By Speedio</p>
          </div>
          <button @click="$router.push('/add')" class="bgBtn">
            <i class="fa-solid fa-plus"></i>
            Criar anotação
          </button>
        </div>

      </template>
    </MenuView>
  </template>
  
<style lang="scss" src="./style.scss"></style>

<script>
import MenuView from "../../MenuView.vue";
import Dexie from 'dexie';

export default {
  name: "MainScreen",
  components: {
    MenuView,
  },
  data() {
    return {
      redirectionDone: false,
    };
  },
  methods: {
    async goToNotes() {
      try {
        // Verificar se o redirecionamento já foi feito
        if (this.redirectionDone) {
          return;
        }

        const db = new Dexie('LocalNotes');
        db.version(1).stores({
          notes: '++id, text, potential, category, reminder, timestamp',
        });

        // Buscar todas as notas no IndexDB
        const allNotes = await db.notes.toArray();

        // Redirecionar com base na quantidade de notas
        if (allNotes.length > 1) {
          this.$router.push('/notes');
          this.redirectionDone = false;
        } else {
          this.$router.push('/');
        }

        // Marcar que o redirecionamento foi feito
        this.redirectionDone = true;
      } catch (error) {
        console.error('Erro ao carregar e redirecionar:', error);
      }
    },
  },
  mounted() {
    // Executar a função goToNotes quando o componente é montado
    this.goToNotes();
  },
};
</script>