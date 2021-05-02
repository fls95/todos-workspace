import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsConceptComponent } from './tabs-concept.component';

describe('TabsConceptComponent', () => {
  let component: TabsConceptComponent;
  let fixture: ComponentFixture<TabsConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsConceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
