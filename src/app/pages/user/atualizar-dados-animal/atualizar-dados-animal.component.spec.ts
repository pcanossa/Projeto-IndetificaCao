import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDadosAnimalComponent } from './atualizar-dados-animal.component';

describe('AtualizarDadosAnimalComponent', () => {
  let component: AtualizarDadosAnimalComponent;
  let fixture: ComponentFixture<AtualizarDadosAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDadosAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDadosAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
