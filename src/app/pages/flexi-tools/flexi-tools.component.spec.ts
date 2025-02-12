import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexiToolsComponent } from './flexi-tools.component';

describe('FlexiToolsComponent', () => {
  let component: FlexiToolsComponent;
  let fixture: ComponentFixture<FlexiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexiToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
