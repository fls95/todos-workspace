import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodoDetailFormComponent } from './todo-detail-form/todo-detail-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TodosAppUiMaterialModule],
  declarations: [TodoDetailFormComponent],
  exports: [TodoDetailFormComponent],
})
export class TodosAppUiTodoDetailFormModule {}
