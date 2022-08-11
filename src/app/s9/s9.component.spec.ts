import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S9Component } from './s9.component';

describe('S9Component', () => {
  let component: S9Component;
  let fixture: ComponentFixture<S9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
