import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoraControlComponent } from './khora-control.component';

describe('KhoraControlComponent', () => {
  let component: KhoraControlComponent;
  let fixture: ComponentFixture<KhoraControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhoraControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhoraControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
