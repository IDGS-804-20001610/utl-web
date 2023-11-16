import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsuTiComponent } from './tsu-ti.component';

describe('TsuTiComponent', () => {
  let component: TsuTiComponent;
  let fixture: ComponentFixture<TsuTiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsuTiComponent]
    });
    fixture = TestBed.createComponent(TsuTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
