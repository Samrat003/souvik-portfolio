import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [NavBar, CommonModule]
})
export class About {
  selectedTab = 'education';
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
