import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navList: Array<any> = [
    {
      navLink: 'events',
      NavName: 'Upcoming Events',
    },

    {
      navLink: 'blogs',
      NavName: 'Blogs',
    },
    {
      navLink: 'aboutus',
      NavName: 'Aboutus',
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
      navLink: '',
      NavName: 'Home',
    },
  ];
}
