import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhasVBAComponent } from './planilhas-vba.component';

describe('PlanilhasVBAComponent', () => {
  let component: PlanilhasVBAComponent;
  let fixture: ComponentFixture<PlanilhasVBAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanilhasVBAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanilhasVBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
