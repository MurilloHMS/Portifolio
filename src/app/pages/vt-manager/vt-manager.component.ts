import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApresentacaoProjetosComponent } from '../../components/apresentacao-projetos/apresentacao-projetos.component';

@Component({
  selector: 'app-vt-manager',
  standalone: true,
  imports: [ApresentacaoProjetosComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './vt-manager.component.html',
  styleUrl: './vt-manager.component.scss'
})
export class VtManagerComponent {

}
