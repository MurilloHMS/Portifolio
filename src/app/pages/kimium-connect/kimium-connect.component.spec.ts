import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KimiumConnectComponent } from './kimium-connect.component';

describe('KimiumConnectComponent', () => {
  let component: KimiumConnectComponent;
  let fixture: ComponentFixture<KimiumConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KimiumConnectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KimiumConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
