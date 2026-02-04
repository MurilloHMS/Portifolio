import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from '../../components/apresentacao-projetos/apresentacao-projetos.component';

@Component({
  selector: 'app-kimium-connect',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './kimium-connect.component.html',
  styleUrl: './kimium-connect.component.scss'
})
export class KimiumConnectComponent {

}
