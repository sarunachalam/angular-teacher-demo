import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department:any = [];
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

   ngOnInit() {
    this.getDepartment();
  }

  getDepartment() {
    this.department = [];
    this.rest.getDepartments().subscribe((data: {}) => {
      console.log("data...",data);
      this.department = data;
    });
  }

}
