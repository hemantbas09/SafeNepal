import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navList: Array<any> = [
    {
      navLink: 'events',
      NavName: 'Events',
    },
    {
      navLink: 'blogs',
      NavName: 'Blogs',
    },
    {
      navLink: 'gallery',
      NavName: 'Gallery',
    },
    {
      navLink: 'aboutus',
      NavName: 'About Us',
    },
    {
      navLink: 'contactus',
      NavName: 'Contact Us',
    },
    {
      navLink: 'project',
      NavName: 'Our Works',
    },
    {
      navLink: 'home',
      NavName: 'Home',
    },
  ];

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.disableScroll();
    } else {
      this.enableScroll();
    }
  }

  @HostListener('window:keydown.escape')
  closeMenu() {
    this.isMenuOpen = false;
    this.enableScroll();
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflow = 'auto';
  }
}
