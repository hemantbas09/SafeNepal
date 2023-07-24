import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamName = [
    {
      image: 'assets/images/team/team-1.jpg',
      name: 'Samrat Ghimire',
      position: 'President',
      link: 'https://www.facebook.com/ghimiresamrat1',
    },
    {
      image: 'assets/images/team/team-2.jpg',
      name: 'Sanskar Raj Subedi',
      position: 'Vice-President',
      link: 'https://www.facebook.com/sanskarsubedi11',
    },
    {
      image: 'assets/images/team/team-3.jpg',
      name: 'Sachin Bikram Basnet',
      position: 'Secretary',
      link: 'https://www.facebook.com/Sachin.Bikram.Basnet',
    },
    {
      image: 'assets/images/team/team-4.jpg',
      name: 'Gayatri Bhattarai',
      position: 'Vice-Secretary',
      link: 'https://www.facebook.com/gauri.bhattarai.731',
    },
    {
      image: 'assets/images/team/team-5.jpg',
      name: 'Reetisha Basel',
      position: 'Treasurer',
      link: 'https://www.facebook.com/ritisha.basel',
    },
  ];
}
