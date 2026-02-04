import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface ProjectDetail {
  title: string;
  about: string;
  purpose: string;
  problemsSolved: string;
  images: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-apresentacao-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apresentacao-projetos.component.html',
  styleUrl: './apresentacao-projetos.component.scss'
})
export class ApresentacaoProjetosComponent implements OnInit {
  @Input() title: string = '';
  @Input() about: string = '';
  @Input() purpose: string = '';
  @Input() problemsSolved: string = '';
  @Input() images: string[] = [];
  @Input() technologies: string[] = [];
  @Input() liveUrl?: string;
  @Input() githubUrl?: string;

  selectedImage: string | null = null;
  isImageModalOpen: boolean = false;

  ngOnInit(): void {
    this.validateInputs();
  }

  private validateInputs(): void {
    if (!this.title) {
      console.warn('ApresentacaoProjetosComponent: title is required');
    }
  }

  openImageModal(image: string): void {
    this.selectedImage = image;
    this.isImageModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal(): void {
    this.selectedImage = null;
    this.isImageModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  navigateToExternal(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  get hasLinks(): boolean {
    return !!(this.liveUrl || this.githubUrl);
  }

  get hasTechnologies(): boolean {
    return this.technologies.length > 0;
  }
}
