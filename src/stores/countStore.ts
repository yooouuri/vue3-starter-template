import { defineStore } from 'pinia'

export default defineStore('count', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})
