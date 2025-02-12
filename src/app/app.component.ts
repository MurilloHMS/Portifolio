import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { ScrollToTopComponent } from "./components/scroll-to-top/scroll-to-top.component";
import { WhatsappComponent } from "./components/whatsapp/whatsapp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, ScrollToTopComponent, WhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MurilloHMS';
}
