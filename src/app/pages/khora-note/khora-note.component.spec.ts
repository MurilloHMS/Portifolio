import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoraNoteComponent } from './khora-note.component';

describe('KhoraNoteComponent', () => {
  let component: KhoraNoteComponent;
  let fixture: ComponentFixture<KhoraNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhoraNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhoraNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
