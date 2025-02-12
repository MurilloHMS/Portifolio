import { Component } from '@angular/core';
import { CertificacoesComponent } from "../../components/certificacoes/certificacoes.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CertificacoesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
