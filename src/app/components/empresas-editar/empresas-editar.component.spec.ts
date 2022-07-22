import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasEditarComponent } from './empresas-editar.component';

describe('EmpresasEditarComponent', () => {
  let component: EmpresasEditarComponent;
  let fixture: ComponentFixture<EmpresasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
