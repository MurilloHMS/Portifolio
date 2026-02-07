import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtManagerComponent } from './vt-manager.component';

describe('VtManagerComponent', () => {
  let component: VtManagerComponent;
  let fixture: ComponentFixture<VtManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtManagerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
