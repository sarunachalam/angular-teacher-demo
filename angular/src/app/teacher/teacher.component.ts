import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers:any = [];
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.teachers = [];
    this.rest.getTeachers().subscribe((data: {}) => {
      console.log("data...",data);
      this.teachers = data;
    });
  }

}
