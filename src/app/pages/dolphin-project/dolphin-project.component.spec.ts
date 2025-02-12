import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinProjectComponent } from './dolphin-project.component';

describe('DolphinProjectComponent', () => {
  let component: DolphinProjectComponent;
  let fixture: ComponentFixture<DolphinProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolphinProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DolphinProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
