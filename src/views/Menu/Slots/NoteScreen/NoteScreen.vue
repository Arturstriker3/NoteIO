<template>
    <MenuView>
      <template v-slot:slot-menu>
        <div>
          <h1>NoteScreen</h1>
        </div>
      </template>
    </MenuView>
  </template>
  
<style lang="scss" src="./style.scss"></style>

<script>
import MenuView from "../../MenuView.vue";

export default {
  name: "NoteScreen",
  components: {
    MenuView,
  },
};
</script>