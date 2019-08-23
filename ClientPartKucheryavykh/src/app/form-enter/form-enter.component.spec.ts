import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnterComponent } from './form-enter.component';

describe('FormEnterComponent', () => {
  let component: FormEnterComponent;
  let fixture: ComponentFixture<FormEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
