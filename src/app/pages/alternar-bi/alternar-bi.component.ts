import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from '../../components/apresentacao-projetos/apresentacao-projetos.component';

@Component({
  selector: 'app-alternar-bi',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './alternar-bi.component.html',
  styleUrl: './alternar-bi.component.scss'
})
export class AlternarBiComponent {

}
