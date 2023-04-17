import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDadosUserComponent } from './atualizar-dados-user.component';

describe('AtualizarDadosUserComponent', () => {
  let component: AtualizarDadosUserComponent;
  let fixture: ComponentFixture<AtualizarDadosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDadosUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDadosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
