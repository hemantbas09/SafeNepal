import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projectDetails: Array<any> = [
    { title: 'r', aboutWork: 'ff' },
    { title: 'f', aboutWork: 'ff' },
    { title: 'c', aboutWork: 'ff' },
    { title: 'x', aboutWork: 'ff' },
    { title: 's', aboutWork: 'ff' },
    { title: 'a', aboutWork: 'ff' },
    { title: 'x', aboutWork: 'ff' },
    { title: 'w', aboutWork: 'ff' },
    { title: 't', aboutWork: 'ff' },
  ];
}
