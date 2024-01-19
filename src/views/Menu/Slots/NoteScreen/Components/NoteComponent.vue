<template>
    <div class="containerBox">
      <div class="leftBox">
        <i class="fa-solid fa-paperclip"></i>
        <div class="textContainer">
          <h3>Exp.: Ao ligar falar com Luíza</h3>
          <div class="dateInfo">
            <p id="noteDate">11/10/2023</p>
            <span>-</span>
            <p id="noteTime">13:37h</p>
          </div>
        </div>
      </div>
      <button id="btnTrash"><i class="fa-regular fa-trash-can"></i></button>
    </div>
  </template>
  
  <script>
  export default {
    name: "NoteComponent",
  };
  </script>
  
  <style lang="scss" scoped>
  @import '/src/assets/scss/_colors.scss';
  
  .containerBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: lighten($colorWhite, 5%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 1em;
    max-width: 100%;

    .leftBox {
      
      display: flex;
      flex-direction: row;
      align-items: center;

      .fa-paperclip {
        color: $colorGray;
        font-size: 20px;
    }
  
    .textContainer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 1em;
      
      border-radius: 10px;
  
      h3 {
        font-weight: bold;
        text-decoration: underline;
        margin-bottom: 0.1em;
        font-family: 'Roboto', sans-serif;
        color: $colorBlack;
        font-size: 18px;
      }
  
      .dateInfo {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        color: darken($colorGray, 20%);
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
  
        p {
          margin: 0.2em 0;
        }
  
        span {
          display: flex;
          align-items: center;  
          margin: 0 0.2em;
        }
      }
    }

    }

    

    #btnTrash {

      border: none;
      border-radius: 50%;
      transition: background-color 0.3s ease;
      padding: 10px 10px;
      background-color: lighten($colorWhite, 5%);

      &:hover {
        i {
          color: rgba($colorBlack, 0.8);
        }
        cursor: pointer;
      }

      .fa-trash-can {
          color: $colorRed;
          font-size: 20px;
      }
    }

  }
  </style>
  