import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from "../nav-bar/nav-bar";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  imports: [CommonModule, NavBar],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('350ms cubic-bezier(.4,2,.3,1)', style({ opacity: 1, transform: 'none' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(.4,2,.3,1)', style({ opacity: 0, transform: 'translateY(-16px)' }))
      ])
    ])
  ]
})
export class Skills implements AfterViewInit {
  selectedSection = 'Language';
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  selectSection(section: string) {
    this.selectedSection = section;
    setTimeout(() => this.animateBars(), 10);
  }

  ngAfterViewInit() {
    setTimeout(() => this.animateBars(), 10);
  }

  animateBars() {
    if (!this.skillBars) return;
    this.skillBars.forEach((bar: ElementRef) => {
      const el = bar.nativeElement as HTMLElement;
      const targetWidth = el.getAttribute('data-width');
      el.style.width = '0';
      // Force reflow
      void el.offsetWidth;
      el.style.transition = 'width 1.2s cubic-bezier(.4,2,.3,1)';
      el.style.width = targetWidth || '0';
    });
  }
}
