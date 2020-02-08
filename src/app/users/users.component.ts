import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'dateOfBirth', 'gender'];
  dataSource = [{name: 'Name', surname: 'Surname', dateOfBirth: '1997-11-14', gender: 'male'}];

  constructor() { }

  ngOnInit() {
  }

  onValueChange(user, fieldName, event) {
    user[fieldName] = event;
    console.log(user);
  }

}
