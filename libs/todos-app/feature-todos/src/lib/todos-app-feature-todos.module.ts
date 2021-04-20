import { NgModule } from '@angular/core';
import { TodosAppUiTodosListModule } from '@todos-workspace/todos-app/ui-todos-list';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  imports: [TodosAppUiTodosListModule, RouterModule.forChild(routes)],
  declarations: [TodosComponent],
})
export class TodosAppFeatureTodosModule {}
