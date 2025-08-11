import { Component } from '@angular/core';
import { AfterViewInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements AfterViewInit, OnDestroy {
private resizeListener: (() => void) | null = null;
  private btnClickListener: (() => void) | null = null;
  private overlayClickListener: (() => void) | null = null;
  private linkListeners: Array<() => void> = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    if (typeof window === 'undefined') return;
    const btn = this.el.nativeElement.querySelector('#hamburgerBtn');
    const nav = this.el.nativeElement.querySelector('#navLinks');
    const overlay = this.el.nativeElement.querySelector('#mobileNavOverlay');
    const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches;
    let lastIsMobile = isMobile();

    // Set initial nav state
    if (isMobile()) {
      this.renderer.removeClass(nav, 'open');
      this.renderer.removeClass(btn, 'open');
      this.renderer.removeClass(overlay, 'open');
    } else {
      this.renderer.addClass(nav, 'open');
      this.renderer.removeClass(btn, 'open');
      this.renderer.removeClass(overlay, 'open');
    }

    // Responsive nav state: update only when breakpoint changes
    const setNavState = () => {
      const mobile = isMobile();
      if (mobile !== lastIsMobile) {
        if (!mobile) {
          this.renderer.addClass(nav, 'open');
          this.renderer.removeClass(btn, 'open');
          this.renderer.removeClass(overlay, 'open');
        } else {
          this.renderer.removeClass(nav, 'open');
          this.renderer.removeClass(btn, 'open');
          this.renderer.removeClass(overlay, 'open');
        }
        lastIsMobile = mobile;
      }
    };
    this.resizeListener = this.renderer.listen(window, 'resize', setNavState);

    // Hamburger button click
    this.btnClickListener = this.renderer.listen(btn, 'click', () => {
      // Toggle 'open' class manually
      if (nav.classList.contains('open')) {
        this.renderer.removeClass(nav, 'open');
      } else {
        this.renderer.addClass(nav, 'open');
      }
      if (btn.classList.contains('open')) {
        this.renderer.removeClass(btn, 'open');
      } else {
        this.renderer.addClass(btn, 'open');
      }
      if (overlay.classList.contains('open')) {
        this.renderer.removeClass(overlay, 'open');
      } else {
        this.renderer.addClass(overlay, 'open');
      }
    });
    // Overlay click
    this.overlayClickListener = this.renderer.listen(overlay, 'click', () => {
      this.renderer.removeClass(nav, 'open');
      this.renderer.removeClass(btn, 'open');
      this.renderer.removeClass(overlay, 'open');
    });
    // Nav link click (close menu on mobile)
    nav.querySelectorAll('a').forEach((link: Element) => {
      const listener = this.renderer.listen(link, 'click', () => {
        if (isMobile()) {
          this.renderer.removeClass(nav, 'open');
          this.renderer.removeClass(btn, 'open');
          this.renderer.removeClass(overlay, 'open');
        }
      });
      this.linkListeners.push(listener);
    });

  }

  ngOnDestroy() {
    if (this.resizeListener) this.resizeListener();
    if (this.btnClickListener) this.btnClickListener();
    if (this.overlayClickListener) this.overlayClickListener();
    this.linkListeners.forEach(unlisten => unlisten());
  }
}
