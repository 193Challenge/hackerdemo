import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiscoPage } from './risco.page';

describe('RiscoPage', () => {
  let component: RiscoPage;
  let fixture: ComponentFixture<RiscoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiscoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
