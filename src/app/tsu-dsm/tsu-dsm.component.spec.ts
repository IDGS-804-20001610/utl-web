import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuDsmComponent } from './tsu-dsm.component';

describe('TsuDsmComponent', () => {
  let component: TsuDsmComponent;
  let fixture: ComponentFixture<TsuDsmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsuDsmComponent]
    });
    fixture = TestBed.createComponent(TsuDsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
