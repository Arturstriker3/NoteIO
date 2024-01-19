<template>
    <MenuView>
      <template v-slot:slot-menu>

        <h2>Screen</h2>

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