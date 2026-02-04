import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, OnInit } from '@angular/core';
import { CertificacoesComponent } from '../../components/certificacoes/certificacoes.component';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
}
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  external: boolean;
}
interface Experience {
  company: string;
  position: string;
  period: string;
  logo: string;
  achievements: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  technologies: Technology[] = [
    { name: 'Java', icon: '../../../assets/images/java.png' },
    { name: 'Spring Boot', icon: '../../../assets/images/Spring_Boot.png' },
    { name: 'C#', icon: '../../../assets/images/c-sharp.png' },
    { name: '.NET', icon: '../../../assets/images/dotnet.png' },
    { name: 'Blazor', icon: '../../../assets/images/blazor.png' },
    { name: 'VBA', icon: '../../../assets/images/vba.png' },
    { name: 'Angular', icon: '../../../assets/images/angular.png' },
    { name: 'HTML5', icon: '../../../assets/images/html.png' },
    { name: 'CSS3', icon: '../../../assets/images/css.png' },
    { name: 'Python', icon: '../../../assets/images/python.png' },
  ];
  featuredProjects: Project[] = [
    {
      title: 'Controle de Estoque PK',
      description:
        'Sistema completo de gestão de estoque com dashboards em tempo real, controle de inventário e relatórios automatizados.',
      image: '../../../assets/images/CdePk.png',
      technologies: ['Java', 'JavaFx', 'SQL Server', 'JasperReports'],
      link: '/projetos/controle-estoque',
      external: false,
    },
    {
      title: 'Site Proauto Kimium',
      description:
        'Plataforma online para demonstração de produtos e serviços, integração com sistemas de gestão e automações de processos.',
      image: '../../../assets/images/site_proauto.png',
      technologies: ['Angular', 'Java', 'API REST', 'Spring Boot'],
      link: 'https://proautokimium.com.br',
      external: true,
    },
    {
      title: 'Khora Note',
      description:
        'NotePad para envio de arquivos importantes criptografados.',
      image: '../../../assets/images/knLogin.png',
      technologies: ['C#', 'Windows Forms', 'SQLite'],
      link: '/projetos/khora-note',
      external: false,
    },
    {
      title: 'Kimium Connect',
      description: 'Sistema de envio de emails automáticos para clientes e funcionários. Responsável por melhorar a comunicação e envio de informações importantes para clientes.',
      image: '../../../assets/images/KimiumConnect/kc1.png',
      technologies: ['Java', 'API REST', 'Spring Boot', 'JavaFx'],
      link: '/projetos/kimium-connect',
      external: false,
    }
  ];
  experiences: Experience[] = [
    {
      company: 'Proauto Kimium',
      position: 'Programador Pleno',
      period: 'Jul 2024 - Atual',
      logo: '../../../assets/images/Logo Proauto.png',
      achievements: [
        'Responsável por automações em VBA no excel melhorando a entrega de relatórios.',
        'Desenvolvimento de soluções em C# e .Net utilizando Angular no Front End e aspNet no Back End.',
        'Responsável por reduzir em 93% o tempo para emitir e entregar relatórios financeiros, sendo realizados em planilhas 100% automatizadas com VBA.',
        'Responsável pelo desenvolvimento do site de vendas em Angular e Asp Net'
      ],
    },
    {
      company: 'ArtSystem Software',
      position: 'Analista de Suporte',
      period: 'Jun 2023 - Mai 2024',
      logo: '../../../assets/images/artsystem.jpg',
      achievements: [
        'Resolução de problemas técnicos para usuários via chamados.',
        'Garantia da eficiência operacional do sistema.',
        'Correção de problemas fiscais utilizando SQL',
        'Planejamento, implementação e configuração de servidores Windows Terminal Server (WTS) e Sql Server, garantindo estabilidade e desempenho.',
        'Instalação de Pontos de venda (PDVs) e correção de cupons fiscais em Sistemas autenticadores e transmissores (Sat), assegurando precisão e integridade dos registros fiscais',
        'Criação de soluções em C# para suporte remoto, facilitando a conexão em servidores remotos.',
        'Automação do processo de instalação do sistema, aumentando a eficiência e reduzindo o tempo de implementação.'
      ],
    },
    {
      company: 'Casas da Mamãe',
      position: 'Programador Jr',
      period: 'Nov 2020 - Abr 2023',
      logo: '../../../assets/images/casasdamamae.png',
      achievements: [
        'Liderança no projeto e implantação de um sistema para calcular impostos e valores finais dos produtos em Python',
        'Automação eficaz para análise de notas fiscais e gestão de impostos, resultando em melhorias na eficiência operacional',
        'Gerenciamento bem sucedido do cadastro de produtos nas filiais',
        'Liderança no processo de emissão de notas fiscais de transporte entre filiais e clientes. Assegurando a conformidade com as regulamentações fiscais e estabelecimento de fluxo de trabalho eficiente'
      ],
    },
  ];
  ngOnInit(): void {

  }
}
