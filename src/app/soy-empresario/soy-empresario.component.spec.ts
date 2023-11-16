import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyEmpresarioComponent } from './soy-empresario.component';

describe('SoyEmpresarioComponent', () => {
  let component: SoyEmpresarioComponent;
  let fixture: ComponentFixture<SoyEmpresarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyEmpresarioComponent]
    });
    fixture = TestBed.createComponent(SoyEmpresarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
