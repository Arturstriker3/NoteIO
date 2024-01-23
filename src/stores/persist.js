
import { defineStore } from 'pinia';

export const usePersistStore = defineStore({
  id: 'persist',
  state: () => ({
    persistData: false,
  }),
  actions: {
    setPersistData(value) {
      this.persistData = value;
    },
  },
});
