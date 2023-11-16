import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyAspiranteComponent } from './soy-aspirante.component';

describe('SoyAspiranteComponent', () => {
  let component: SoyAspiranteComponent;
  let fixture: ComponentFixture<SoyAspiranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyAspiranteComponent]
    });
    fixture = TestBed.createComponent(SoyAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
