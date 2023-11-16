import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyAdministrativoComponent } from './soy-administrativo.component';

describe('SoyAdministrativoComponent', () => {
  let component: SoyAdministrativoComponent;
  let fixture: ComponentFixture<SoyAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyAdministrativoComponent]
    });
    fixture = TestBed.createComponent(SoyAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
