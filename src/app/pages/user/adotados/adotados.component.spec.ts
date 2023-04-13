import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotadosComponent } from './adotados.component';

describe('AdotadosComponent', () => {
  let component: AdotadosComponent;
  let fixture: ComponentFixture<AdotadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdotadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
