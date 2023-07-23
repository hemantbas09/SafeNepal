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
    },
    {
      image: 'assets/images/team/team-2.jpg',
      name: 'Sanskar Raj Subedi',
      position: 'Vice-President',
    },
    {
      image: 'assets/images/team/team-3.jpg',
      name: 'Sachin Bikram Basnet',
      position: 'Secretary',
    },
    {
      image: 'assets/images/team/team-4.jpg',
      name: 'Gayatri Bhattarai',
      position: 'Vice-Secretary',
    },
    {
      image: 'assets/images/team/team-5.jpg',
      name: 'Reetisha Basel',
      position: 'Treasurer',
    },
  ];
}
