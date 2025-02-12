import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexProComponent } from './flex-pro.component';

describe('FlexProComponent', () => {
  let component: FlexProComponent;
  let fixture: ComponentFixture<FlexProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
