import { Injectable } from '@angular/core';

export class Department {
  id: number;
  name: string;
  userList?: any;
}
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }
  getDepartments(): Promise<Department[]> {
    return Promise.resolve([
      { id: 1, name: 'Department1'},
      { id: 2, name: 'Department2'},
      { id: 3, name: 'Department3'}
    ]);
  }
}
