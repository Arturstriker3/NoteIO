// persist.js

import { defineStore } from 'pinia';

export const usePersistStore = defineStore({
  id: 'persist',
  state: () => ({
    persistData: false,
    actualToken: '',
  }),
  actions: {
    setPersistData(value) {
      this.persistData = value;
    },
    setActualToken(token) {
      this.actualToken = token;
    },
  },
});