import { Component } from '@angular/core';
import { certificacoes } from '../../../types/certificacoes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificacoes.component.html',
  styleUrl: './certificacoes.component.scss'
})
export class CertificacoesComponent {
  certificacoes = certificacoes;
}
