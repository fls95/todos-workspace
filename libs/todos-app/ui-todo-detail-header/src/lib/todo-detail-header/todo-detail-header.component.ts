import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todos-workspace-todo-detail-header',
  templateUrl: './todo-detail-header.component.html',
  styleUrls: ['./todo-detail-header.component.scss'],
})
export class TodoDetailHeaderComponent {
  @Output() emitNavigateToTodos = new EventEmitter<void>();
  @Output() emitTodoAndTodoDetailDelete = new EventEmitter<void>();

  onNavigateToTodos() {
    this.emitNavigateToTodos.emit();
  }

  onTodoAndTodoDetailDelete() {
    this.emitTodoAndTodoDetailDelete.emit();
  }
}
