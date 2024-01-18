<template>
    <header>
      <div class="topbar">
        <h2>Anotações</h2>
        <button>
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </header>
  
    <main>
      <div class="screenContent">
        <slot name="slot-menu"></slot>
      </div>
    </main>
  </template>
  
  <style lang="scss" src="./style.scss"></style>