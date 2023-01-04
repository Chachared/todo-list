<script setup lang="ts">import { useTodos } from '@/stores/todoStore';
import { ref } from 'vue';


const input = ref<string>('');
const todoStore = useTodos();
console.log(todoStore.todos);

</script>

<template>
  <div class="container">
    <div class="row-4 my-2 mx-2">
      <h2 class="text-center">Todo</h2>
    </div>
    <div class="row-4 my-2 mx-2 d-flex align-items-center">
        <input v-model="input" type="text" class="flex-fill rounded-pill mx-2" />
        <button class="btn btn-primary rounded-pill mx-2">Ajouter</button>
    </div>
    <div class="row-4 my-2 mx-2 d-flex align-items-center">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="css">
  li {
    list-style: '¤';
  }
</style>
