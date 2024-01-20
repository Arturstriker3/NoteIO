<template>
    <MenuView>
      <template v-slot:slot-menu>
        <div class="formScreen">
          <form class="formItens" action="">
            <textarea name="text" id="bgInput" cols="18" rows="5" placeholder="Exp.: Ao ligar falar com Luiza"></textarea>

            <div class="smlInputs">
              <p>Potencial do negócio</p>
              <input type="text" placeholder="R$ 00,00" name="email">

              <p>Categorização</p>
              <div class="selectInput">
                <select>
                  <option selected disabled>Categorização</option>
                  <option>Crítico</option>
                  <option>Importante</option>
                  <option>Tranquilo</option>
                </select>
              </div>
  
              <p>Lembrete</p>
              <input id="date" type="date"/>
            </div>
          </form>

          <div class="footBtn">
            <button id="btnTrash"><i class="fa-regular fa-trash-can"></i></button>
            <button id="btnSave">Salvar</button>
          </div>
        </div>
      </template>
    </MenuView>
  </template>
  
<style lang="scss" src="./style.scss"></style>

<script>
import MenuView from "../../MenuView.vue";

export default {
  name: "AddScreen",
  components: {
    MenuView,
  },
};
</script>