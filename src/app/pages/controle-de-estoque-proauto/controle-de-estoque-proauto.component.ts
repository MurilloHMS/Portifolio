import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from "../../components/apresentacao-projetos/apresentacao-projetos.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controle-de-estoque-proauto',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './controle-de-estoque-proauto.component.html',
  styleUrl: './controle-de-estoque-proauto.component.scss'
})
export class ControleDeEstoqueProautoComponent {

}
