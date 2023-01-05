<script setup lang="ts">
import type { Todo } from "@/shared/interfaces/todo.interface";
import { useTodos } from "@/shared/stores/todoStore";
import { ref } from "vue";
import TodoForm from "./TodoForm.vue";

const input = ref<string>("");

const todoStore = useTodos();
todoStore.fetchTodos();

function addTodo() {
  todoStore.addTodo(input.value);
  input.value = "";
}

function deleteTodo(todoId: string) {
  todoStore.deleteTodo(todoId);
}

function updateTodo(todoId: string, update: Partial<Todo>) {
  todoStore.updateTodo(todoId, update);
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
        <li
          v-for="todo in todoStore.todoList"
          :key="todo.content"
          @click="updateTodo(todo._id!, { done: !todo.done })"
          class="my-3"
        >
          <div
            v-if="!todo.editMode"
            @click="updateTodo(todo._id!, { done: !todo.done })"
          >
            <input class="mx-3" :checked="todo.done" type="checkbox" />
            <span>{{ todo.content }}</span>
            <button
              @click.stop="updateTodo(todo._id!, { editMode: true })"
              class="btn btn-success rounded-pill mx-3"
            >
              Editer
            </button>
            <button
              @click.stop="deleteTodo(todo._id!)"
              class="btn btn-danger rounded-pill mx-3"
            >
              Effacer
            </button>
          </div>
          <div v-else>
            <TodoForm
              :content="todo.content"
              @cancel="updateTodo(todo._id!, { editMode: false })"
              @update="updateTodo(todo._id!, { editMode: false, content: $event})"/>
          </div>
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
