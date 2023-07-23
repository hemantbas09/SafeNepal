import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  navList: Array<any> = [
    {
      navLink: 'home',
      NavName: 'Home',
    },
    {
      navLink: 'project',
      NavName: 'Our Works',
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
      navLink: 'events',
      NavName: 'Upcoming Events',
    },
  ];
}
