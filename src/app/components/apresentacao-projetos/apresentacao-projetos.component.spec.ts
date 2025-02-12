import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoProjetosComponent } from './apresentacao-projetos.component';

describe('ApresentacaoProjetosComponent', () => {
  let component: ApresentacaoProjetosComponent;
  let fixture: ComponentFixture<ApresentacaoProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresentacaoProjetosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApresentacaoProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
