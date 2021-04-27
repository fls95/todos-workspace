import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodoDetail from './+state/todo-detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoDetailEffects } from './+state/todo-detail.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromTodoDetail.todoDetailFeatureKey, fromTodoDetail.reducer), EffectsModule.forFeature([TodoDetailEffects])],
})
export class TodosAppDataAccessTodoDetailModule {}
