import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TodosAppUiMaterialModule],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
})
export class TodosAppUiTodoFormModule {}
