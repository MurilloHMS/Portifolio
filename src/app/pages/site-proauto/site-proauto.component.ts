import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from '../../components/apresentacao-projetos/apresentacao-projetos.component';

@Component({
  selector: 'app-site-proauto',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './site-proauto.component.html',
  styleUrl: './site-proauto.component.scss'
})
export class SiteProautoComponent {

}
