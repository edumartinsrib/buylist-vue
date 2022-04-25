import { defineStore } from "pinia";

export const useBuyStore = defineStore("itemsList", {
  state: () => ({
    itemsList: [],
    id: 0,
  }),
  getters: {
    getId(state) {
      state.id;
    },
    getTotal() {
      const accTotal = this.itemsList.reduce(
        (acc, value) => acc + value.value,
        0
      );
  
      return accTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    },
  },
  actions: {
    addItem(item, valor) {
      this.itemsList.push({
        id: this.id++,
        item: item,
        value: valor,
        done: false,
      });
    },
    deleteItem(itemId) {
      this.itemsList = this.itemsList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleDone(itemId) {
      const item = this.itemsList.find((object) => object.id === itemId);
      item ? (item.done = !item.done) : "";
    },
   
  },
});
