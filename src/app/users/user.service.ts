import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export interface User {
  id: number;
  name: string;
  departmentId: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { console.log('UsersService instance created.');  }
  ngOnDestroy(): void { console.log('UsersService instance destroyed.'); }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions);
  }
}
