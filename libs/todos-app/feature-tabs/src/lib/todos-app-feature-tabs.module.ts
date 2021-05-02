import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TodosAppUiHeaderModule } from '@todos-workspace/todos-app/ui-header';
import { TodosAppUiTabsConceptModule } from '@todos-workspace/todos-app/ui-tabs-concept';
import { TodosAppUiTabsDirectiveModule } from '@todos-workspace/todos-app/ui-tabs-directive';
import { TodosAppUiMaterialModule } from '@todos-workspace/todos-app/ui-material';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TodosAppUiHeaderModule,
    TodosAppUiTabsConceptModule,
    TodosAppUiTabsDirectiveModule,
    TodosAppUiMaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsComponent],
  exports: [TabsComponent],
})
export class TodosAppFeatureTabsModule {}
