import { TodoDetail } from '@todos-workspace/shared/models';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'todos-workspace-todo-detail-form',
  templateUrl: './todo-detail-form.component.html',
  styleUrls: ['./todo-detail-form.component.scss'],
})
export class TodoDetailFormComponent implements OnInit {
  @Input() todoDetail: TodoDetail;
  public todoDetailFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.todoDetailFormGroup = this.formBuilder.group({
      title: [this.todoDetail.title],
      completed: [this.todoDetail.completed],
      detail: [this.todoDetail.detail],
    });
  }
}
