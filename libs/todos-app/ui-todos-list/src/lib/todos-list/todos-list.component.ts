import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Update } from '@ngrx/entity';
import { Todo } from '@todos-workspace/shared/models';

@Component({
  selector: 'todos-workspace-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  @Input() todos: Todo[];
  @Output() emitTodoUpdate = new EventEmitter<Update<Todo>>();
  @Output() emitTodosUpdate = new EventEmitter<Update<Todo>[]>();
  @Output() emitTodoDelete = new EventEmitter<Todo['id']>();
  @Output() emitTodoDetailEdit = new EventEmitter<Todo['id']>();

  onMarkAndUnmarkAllAsCompleted($event: MatCheckboxChange) {
    const updates: Update<Todo>[] = this.todos.map((todo) => ({
      id: todo.id,
      changes: {
        completed: $event.checked,
      },
    }));

    this.emitTodosUpdate.emit(updates);
  }

  onTodoMatCheckboxChange($event: MatCheckboxChange, todo: Todo) {
    const update: Update<Todo> = {
      id: todo.id,
      changes: {
        completed: $event.checked,
      },
    };

    this.onTodoUpdate(update);
  }

  onTodoUpdate(update: Update<Todo>) {
    this.emitTodoUpdate.emit(update);
  }

  onTodoDelete(id: Todo['id']) {
    this.emitTodoDelete.emit(id);
  }

  onTodoDetailEdit(id: Todo['id']) {
    this.emitTodoDetailEdit.emit(id);
  }

  checkUncompletedTodos() {
    return this.todos.every((todo) => todo.completed);
  }

  completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  uncompletedTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}
