import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'todos-workspace-todo-detail-form',
  templateUrl: './todo-detail-form.component.html',
  styleUrls: ['./todo-detail-form.component.scss'],
})
export class TodoDetailFormComponent implements OnInit {
  public todoDetailFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.todoDetailFormGroup = this.formBuilder.group({
      title: ['New title'],
      detail: ['New detail for this todo'],
    });
  }
}
