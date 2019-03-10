import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncendioPage } from './incendio.page';

describe('IncendioPage', () => {
  let component: IncendioPage;
  let fixture: ComponentFixture<IncendioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncendioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncendioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
