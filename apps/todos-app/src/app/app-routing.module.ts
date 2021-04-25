import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('@todos-workspace/todos-app/feature-todos').then(
        (module) => module.TodosAppFeatureTodosModule
      ),
  },
  {
    path: 'todo-detail',
    loadChildren: () =>
      import('@todos-workspace/todos-app/feature-todo-detail').then(
        (module) => module.TodosAppFeatureTodoDetailModule
      ),
  },
  {
    path: '**',
    redirectTo: 'todos',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
