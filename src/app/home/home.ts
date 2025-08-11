import { Component, AfterViewInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavBar, NgIf, NgFor, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit{
   showFirecracker = true;
   particles = Array(18);
   constructor( private el: ElementRef) {}
  // Typing animation logic
   ngAfterViewInit() {
    const roles = [
      'Backend Developer',
      'Front-End Developer',
      'System Designer'
    ];
    const typedText = this.el.nativeElement.querySelector('#typed-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout: any;

    function typeRole() {
      if (!typedText) return;
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        charIndex--;
        typedText.textContent = currentRole.substring(0, charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          typingTimeout = setTimeout(typeRole, 600);
        } else {
          typingTimeout = setTimeout(typeRole, 40);
        }
      } else {
        charIndex++;
        typedText.textContent = currentRole.substring(0, charIndex);
        if (charIndex === currentRole.length) {
          isDeleting = true;
          typingTimeout = setTimeout(typeRole, 1200);
        } else {
          typingTimeout = setTimeout(typeRole, 80);
        }
      }
    }
    typeRole();
    // Firecracker animation hide after 2.2s
    setTimeout(() => { this.showFirecracker = false; }, 2200);
  }
}
