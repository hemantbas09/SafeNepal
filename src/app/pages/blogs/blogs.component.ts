import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
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
