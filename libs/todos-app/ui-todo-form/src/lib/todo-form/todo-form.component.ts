import { Update } from '@ngrx/entity';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '@todos-workspace/shared/models';

@Component({
  selector: 'todos-workspace-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public todoTitleControl = new FormControl();

  @Input() todo: Todo;

  @Output() emitTodoUpdate = new EventEmitter<Update<Todo>>();

  ngOnInit(): void {
    this.todoTitleControl.setValue(this.todo.title);
  }

  updateTitle($event: Event) {
    if ($event instanceof KeyboardEvent) {
      console.log($event);
    }
    const update: Update<Todo> = {
      id: this.todo.id,
      changes: {
        title: this.todoTitleControl.value,
      },
    };
    this.emitTodoUpdate.emit(update);
  }
}
