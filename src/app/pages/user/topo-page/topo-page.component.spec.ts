import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoPageComponent } from './topo-page.component';

describe('TopoPageComponent', () => {
  let component: TopoPageComponent;
  let fixture: ComponentFixture<TopoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
