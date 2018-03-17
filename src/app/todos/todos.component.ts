import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    const newTodo = {
      text: this.text
    };
    this.todos.push(newTodo);
    this._todoService.addTodo(newTodo);
  }

  deleteTodo(todoText) {
    this.todos.splice(todoText, 1);
    this._todoService.deleteTodo(todoText);
  }

  sortTodoByName() {
    this.todos.sort((a, b) => a.text > b.text);
    console.log(this.todos);
    this._todoService.sortTodoByName();
  }
}
