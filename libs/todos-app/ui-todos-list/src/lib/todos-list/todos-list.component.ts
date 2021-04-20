import { Component, Input } from '@angular/core';
import { Todo } from '@todos-workspace/shared/models';

@Component({
  selector: 'todos-workspace-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodosListComponent {
  @Input() todos: Todo[];
}
