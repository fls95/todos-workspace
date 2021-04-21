import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './+state/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './+state/todos.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
})
export class TodosAppDataAccessTodosModule {}
