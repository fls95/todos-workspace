import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() emitTodoDelete = new EventEmitter<Todo['id']>();
  @Output() emitTodoDetailEdit = new EventEmitter<Todo['id']>();

  onTodoUpdate(update: Update<Todo>) {
    this.emitTodoUpdate.emit(update);
  }

  onTodoDelete(id: Todo['id']) {
    this.emitTodoDelete.emit(id);
  }

  onTodoDetailEdit(id: Todo['id']) {
    this.emitTodoDetailEdit.emit(id);
  }
}
