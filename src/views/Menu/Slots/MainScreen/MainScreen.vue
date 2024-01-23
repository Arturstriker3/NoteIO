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
import checkAndRedirect from "./Js/dinamicRoutesMain";

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
  mounted() {
    checkAndRedirect();
  },
};
</script>