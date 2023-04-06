import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetacentralComponent } from './tarjetacentral.component';

describe('TarjetacentralComponent', () => {
  let component: TarjetacentralComponent;
  let fixture: ComponentFixture<TarjetacentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetacentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetacentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
