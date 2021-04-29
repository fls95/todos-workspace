import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '@todos-workspace/shared/models';

@Component({
  selector: 'todos-workspace-new-todo-dialog',
  templateUrl: './new-todo-dialog.component.html',
  styleUrls: ['./new-todo-dialog.component.scss'],
})
export class NewTodoDialogComponent {
  public todoTitleControl = new FormControl(null);

  constructor(public dialogRef: MatDialogRef<NewTodoDialogComponent>) {}

  addTodo() {
    const newTodo: Todo = {
      id: null,
      title: this.todoTitleControl.value,
      completed: false,
    };
    this.dialogRef.close(newTodo);
  }
}
