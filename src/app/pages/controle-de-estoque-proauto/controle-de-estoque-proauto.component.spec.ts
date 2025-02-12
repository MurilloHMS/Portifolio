import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDeEstoqueProautoComponent } from './controle-de-estoque-proauto.component';

describe('ControleDeEstoqueProautoComponent', () => {
  let component: ControleDeEstoqueProautoComponent;
  let fixture: ComponentFixture<ControleDeEstoqueProautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleDeEstoqueProautoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControleDeEstoqueProautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
