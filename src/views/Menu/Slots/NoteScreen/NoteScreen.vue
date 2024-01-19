<template>
    <MenuView>
      <template v-slot:slot-menu>

        <div class="containerNotes">			
          <a href="#">
            <NoteComponentVue/>
          </a>
        </div>
        <div class="containerMain">
          <h1>second screen</h1>
        </div>

      </template>
    </MenuView>
  </template>
  
<style lang="scss" src="./style.scss"></style>

<script>
import MenuView from "../../MenuView.vue";
import NoteComponentVue from './Components/NoteComponent.vue';

export default {
  name: "NoteScreen",
  components: {
    MenuView,
    NoteComponentVue,
  },
};
</script>