// Store for things that don't deserve their own store
import { defineStore } from 'pinia'

export const useGenericStore = defineStore('generic', {
    state: () => ({
    }),
    getters: {},
    actions: {}
})