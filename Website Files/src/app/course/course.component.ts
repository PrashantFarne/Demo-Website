import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  course = [
    {
      id: 1,
      name: 'Angular',
      description: 'Framework',
      image: '../../assets/angular.png',
    },
    {
      id: 2,
      name: 'React JS',
      description: 'Framework',
      image: '../../assets/react.png',
    },
    {
      id: 3,
      name: 'HTML 5',
      description: 'Front-end Lang',
      image: '../../assets/html.png',
    },
    {
      id: 4,
      name: 'CSS',
      description: 'Front-end Lang',
      image: '../../assets/css.png',
    },
    {
      id: 5,
      name: 'Bootstrap',
      description: 123,
      image: '../../assets/bootstrap.png',
    },
    {
      id: 6,
      name: 'MongoDB',
      description: 123,
      image: '../../assets/mongo.png',
    },
    {
      id: 7,
      name: 'Java Script',
      description: 123,
      image: '../../assets/js.jpeg',
    },
    {
      id: 8,
      name: 'Node JS',
      description: 123,
      image: '../../assets/node.png',
    },
    { id: 9, name: 'JQuery', description: 123, image: '../../assets/jq.jpeg' },
  ];
}
