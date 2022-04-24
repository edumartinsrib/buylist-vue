import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'listaItens',
  state: () => ({
    listaItens: [],
    id: 0,
  }),
  getters: {
    getId: (state) => state.id 
  },
  actions: {
    addItem(item, valor) {
      this.listaItens.push({
        id: this.id++,
        item: item,
        value: valor,
      })
    }
  }
})
