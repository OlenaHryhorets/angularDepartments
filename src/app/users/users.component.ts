import { Component, OnInit } from '@angular/core';
import {User, UserService} from './user.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-customers',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
// todo how to get list of users from specific department (with id)?
  ngOnInit() {
  }

}
