import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Helen', departmentId: 1 },
      { id: 2, name: 'Dima', departmentId: 2 },
      { id: 3, name: 'Luke', departmentId: 1 },
      { id: 4, name: 'Tomas', departmentId: 3 },
      { id: 5, name: 'Mircha', departmentId: 3 },
      { id: 6, name: 'Ricky', departmentId: 4 },
      { id: 7, name: 'Dan', departmentId: 2 },
      { id: 8, name: 'Mila', departmentId: 1 },
      { id: 9, name: 'Sam', departmentId: 3 },
      { id: 10, name: 'Tim', departmentId: 2 }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a human always has an id.
  // If the humans array is empty,
  // the method below returns the initial number (11).
  // if the humans array is not empty, the method below returns the highest
  // human id + 1.
  // genId(humans: Human[]): number {
  //   return humans.length > 0 ? Math.max(...humans.map(human => human.id)) + 1 : 11;
  // }
}
