import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvamentoPage } from './salvamento.page';

describe('SalvamentoPage', () => {
  let component: SalvamentoPage;
  let fixture: ComponentFixture<SalvamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
