import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyEgresadoComponent } from './soy-egresado.component';

describe('SoyEgresadoComponent', () => {
  let component: SoyEgresadoComponent;
  let fixture: ComponentFixture<SoyEgresadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyEgresadoComponent]
    });
    fixture = TestBed.createComponent(SoyEgresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
