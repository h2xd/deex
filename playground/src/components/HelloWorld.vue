<script setup lang="ts">
import { ref } from 'vue'

import { createDeex, createDeexExtension } from '../../../packages/deex/dist'

defineProps<{ msg: string }>()

const count = ref(0)

const extension = createDeexExtension({
  title: 'Deex Extension',
  description: 'Custom Deex Extension',
  panels: [
    {
      title: 'Panel 1',
      description: 'Panel 1 Description',
      components: [
        {
          title: 'Reset Count',
          onClick: (close) => {
            console.log('Reset Count')
            count.value = 0
            close()
          }
        },
         {
          title: 'Set Count to 100',
          onClick: (close) => {
            console.log('Set Count to 100')
            count.value = 100
            close()
          }
        }
      ]
    },
  ]
})

const deex = createDeex()
deex.installExtension(extension)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
