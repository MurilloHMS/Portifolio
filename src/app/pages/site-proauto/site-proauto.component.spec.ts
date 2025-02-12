import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteProautoComponent } from './site-proauto.component';

describe('SiteProautoComponent', () => {
  let component: SiteProautoComponent;
  let fixture: ComponentFixture<SiteProautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteProautoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiteProautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
