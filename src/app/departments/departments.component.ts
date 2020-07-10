import { Component, OnInit } from '@angular/core';
import {Department, DepartmentService} from './department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Promise<Department[]>;

  constructor(private departmentService: DepartmentService) {
    this.departments = this.departmentService.getDepartments();
  }

  ngOnInit(): void {
  }

}
