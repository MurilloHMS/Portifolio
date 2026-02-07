import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternarBiComponent } from './alternar-bi.component';

describe('AlternarBiComponent', () => {
  let component: AlternarBiComponent;
  let fixture: ComponentFixture<AlternarBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternarBiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternarBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
