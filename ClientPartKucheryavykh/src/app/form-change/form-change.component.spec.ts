import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeComponent } from './form-change.component';

describe('FormChangeComponent', () => {
  let component: FormChangeComponent;
  let fixture: ComponentFixture<FormChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
