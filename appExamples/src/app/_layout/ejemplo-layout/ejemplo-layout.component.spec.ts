import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploLayoutComponent } from './ejemplo-layout.component';

describe('EjemploLayoutComponent', () => {
  let component: EjemploLayoutComponent;
  let fixture: ComponentFixture<EjemploLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
