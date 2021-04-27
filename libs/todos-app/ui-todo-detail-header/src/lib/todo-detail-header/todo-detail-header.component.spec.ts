import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailHeaderComponent } from './todo-detail-header.component';

describe('TodoDetailHeaderComponent', () => {
  let component: TodoDetailHeaderComponent;
  let fixture: ComponentFixture<TodoDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
