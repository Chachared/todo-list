<script setup lang="ts">
import { useTodos } from "@/stores/todoStore";
import { ref } from "vue";

const input = ref<string>("");
const todoStore = useTodos();
const todos = todoStore.todoList;

function addTodo() {
  todoStore.addTodo(input.value);
  input.value = "";
}
</script>

<template>
  <div class="container">
    <div class="row-4 my-2 mx-2">
      <h2 class="text-center">Todos</h2>
    </div>
    <div class="row-4 my-2 mx-2 d-flex align-items-center">
      <input v-model="input" type="text" class="flex-fill rounded-pill mx-2" />
      <button @click="addTodo" class="btn btn-primary rounded-pill mx-2">
        Ajouter
      </button>
    </div>
    <div class="row-4 my-2 mx-2 d-flex align-items-center">
      <ul>
        <li v-for="todo in todos" key="todo.content">{{ todo.content }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="css">
li {
  list-style: "¤";
}
</style>
