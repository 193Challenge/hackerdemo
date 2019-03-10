import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcidentesPage } from './acidentes.page';

describe('AcidentesPage', () => {
  let component: AcidentesPage;
  let fixture: ComponentFixture<AcidentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcidentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcidentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
