import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() {
  }

  getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(todoText, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  sortTodoByName() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos.sort((a, b) => a.text > b.text);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
