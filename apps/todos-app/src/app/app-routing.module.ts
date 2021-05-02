import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
    path: 'tabs',
    loadChildren: () =>
      import('@todos-workspace/todos-app/feature-tabs').then(
        (module) => module.TodosAppFeatureTabsModule
      ),
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
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
