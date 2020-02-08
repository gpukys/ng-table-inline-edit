import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private data: User[] = DATA;

  constructor() { }

  getAllUsers() {
    return of(this.data).pipe(delay(1200));
  }

  patchUser(user: User) {
    this.data.filter(e => e.id === user.id)[0] = user;
    return of(user).pipe(delay(300));
  }
}

export interface User {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  gender: Gender;
}

export enum Gender {
  male = 1,
  female = 2
}
