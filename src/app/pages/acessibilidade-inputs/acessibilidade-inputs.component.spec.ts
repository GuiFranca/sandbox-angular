import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessibilidadeInputsComponent } from './acessibilidade-inputs.component';

describe('AcessibilidadeInputsComponent', () => {
  let component: AcessibilidadeInputsComponent;
  let fixture: ComponentFixture<AcessibilidadeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessibilidadeInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessibilidadeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
