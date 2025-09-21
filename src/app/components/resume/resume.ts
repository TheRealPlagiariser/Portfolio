
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrenchResumeComponent } from './fr/french-resume.component';
import { EnglishResumeComponent } from './en/english-resume.component';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, FrenchResumeComponent, EnglishResumeComponent],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})

export class Resume {
  showFrenchResume = false;
  showEnglishResume = false;

  toggleFrenchResume() {
    this.showFrenchResume = !this.showFrenchResume;
    if (this.showFrenchResume) this.showEnglishResume = false;
  }

  toggleEnglishResume() {
    this.showEnglishResume = !this.showEnglishResume;
    if (this.showEnglishResume) this.showFrenchResume = false;
  }
}
