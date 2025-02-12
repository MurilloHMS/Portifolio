import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from '../../components/apresentacao-projetos/apresentacao-projetos.component';

@Component({
  selector: 'app-khora-note',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './khora-note.component.html',
  styleUrl: './khora-note.component.scss'
})
export class KhoraNoteComponent {

}
