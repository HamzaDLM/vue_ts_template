<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {}
  },
  created() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})
</script>

<template>
  <main class="w-screen h-screen">
    <router-view></router-view>
  </main>
</template>

<style>
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #353535;
}

::-webkit-scrollbar-thumb {
  background: #9D9D9D;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #545454;
  width: 6px;
  height: 6px;
}
</style>
