<script setup lang="ts">
import type { Todo } from "@/shared/interfaces/todo.interface";
import { useTodos } from "@/shared/stores/todoStore";
import { ref } from "vue";

const input = ref<string>("");
const todoStore = useTodos();
const todos = todoStore.todoList;

function addTodo() {
  todoStore.addTodo(input.value);
  input.value = "";
}

function toggleTodo(index: number) {
  todoStore.toggleTodo(index);
}

function deleteTodo(index: number) {
  todoStore.deleteTodo(index);
}

function updateTodo(index: number, update: Partial<Todo>) {
  todoStore.updateTodo(index, update);
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
        <li v-for="(todo, index) in todos" :key="todo.content" @click="toggleTodo(index)" class="my-3">
          <input class="mx-3" :checked="todo.done" type="checkbox" />
          <span>{{ todo.content }}</span>
          <button
              @click.stop="updateTodo(index, { editMode: true })"
              class="btn btn-success rounded-pill mx-3"
            >Editer
          </button>
          <button @click.stop="deleteTodo(index)" class="btn btn-danger rounded-pill mx-3">Effacer</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css">
li {
  list-style: none;
}
</style>
