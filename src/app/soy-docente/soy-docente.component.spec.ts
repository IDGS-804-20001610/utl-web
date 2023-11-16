import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyDocenteComponent } from './soy-docente.component';

describe('SoyDocenteComponent', () => {
  let component: SoyDocenteComponent;
  let fixture: ComponentFixture<SoyDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyDocenteComponent]
    });
    fixture = TestBed.createComponent(SoyDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
