<template>
    <MenuView>
      <template v-slot:slot-menu>

        <NoteComponentVue/>
        <NoteComponentVue/>
        <NoteComponentVue/>

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