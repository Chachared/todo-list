import { defineStore } from 'pinia';
import type { Todo } from '../interfaces/todo.interface';

interface TodoState {
    todos: Todo[];
}

export const useTodos = defineStore('todos', {
    state: (): TodoState => ({
        todos: [],
    })
})