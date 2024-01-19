<template>
    <MenuView>
      <template v-slot:slot-menu>

        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon"></span>
                <span class="tittle">Home</span>
              </a>
            </li>
          </ul>
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