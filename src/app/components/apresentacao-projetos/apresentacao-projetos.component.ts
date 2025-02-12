import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apresentacao-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apresentacao-projetos.component.html',
  styleUrl: './apresentacao-projetos.component.scss'
})
export class ApresentacaoProjetosComponent {
  @Input() title: string = '';
  @Input() about: string = '';
  @Input() purpose: string = '';
  @Input() problemsSolved: string = '';
  @Input() images: string[] = [];
}
