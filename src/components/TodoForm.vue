<script setup lang="ts">import { ref } from 'vue';

const props = defineProps<{ content: string }>();
const emit = defineEmits<{
    (e:'cancel');
     (e:'update', updatedContent: string)
}>();
const input = ref<string>(props.content);
</script>


<template>
    <div class="d-flex flex-fill">
      <input v-model="input" type="text" class="mx-2 flex-fill" />
      <button @click="emit('cancel')" class="btn btn-danger mx-2 rounded-pill">
        Annuler
      </button>
      <button @click="emit('update', input)" class="btn btn-primary rounded-pill">
        Sauvegarder
      </button>
    </div>
  </template>

<style>
    
</style>