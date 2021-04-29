import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTodoDialogComponent } from './new-todo-dialog/new-todo-dialog.component';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TodosAppUiMaterialModule],
  declarations: [NewTodoDialogComponent],
  exports: [NewTodoDialogComponent],
})
export class TodosAppUiNewTodoDialogModule {}
