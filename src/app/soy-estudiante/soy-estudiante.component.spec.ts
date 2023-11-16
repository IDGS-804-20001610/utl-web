import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyEstudianteComponent } from './soy-estudiante.component';

describe('SoyEstudianteComponent', () => {
  let component: SoyEstudianteComponent;
  let fixture: ComponentFixture<SoyEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyEstudianteComponent]
    });
    fixture = TestBed.createComponent(SoyEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
