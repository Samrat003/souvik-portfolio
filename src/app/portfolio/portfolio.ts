import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from "../nav-bar/nav-bar";
import { Project, PROJECTS } from './constants';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
  imports: [CommonModule, NavBar]
})
export class Portfolio {
  projects: Project[] = PROJECTS;
  selectedProjectKey = 'project1';
  selectedTab = 'description';
  tabAnim = false;

  get selectedProject() {
    return this.projects.find((p: Project) => p.key === this.selectedProjectKey)!;
  }

  onProjectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedProjectKey = value;
    this.selectedTab = 'description';
  }

  selectTab(tab: string) {
    if (this.selectedTab !== tab) {
      this.tabAnim = false;
      // Force reflow to restart animation reliably
      void (document.querySelector('.portfolio-tab-content') as HTMLElement)?.offsetWidth;
      this.selectedTab = tab;
      setTimeout(() => this.tabAnim = true, 0);
    }
  }
}
