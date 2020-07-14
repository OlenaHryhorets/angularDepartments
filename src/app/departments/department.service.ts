import { Injectable } from '@angular/core';
import {User, UserService} from '../users/user.service';

export class Department {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private userService: UserService) { }
  getDepartments(): Promise<Department[]> {
    return Promise.resolve([
      { id: 1, name: 'Department1'},
      { id: 2, name: 'Department2'},
      { id: 3, name: 'Department3'},
      { id: 4, name: 'Department4'},
    ]);
  }
//   getUsersOfDepartmentById(id: number): Promise<User[]> {
// return this.userService.getUsers()
// }
}
