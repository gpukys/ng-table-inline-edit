import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService, User, Gender } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'dateOfBirth', 'gender'];
  loading = false;
  dataSource: User[];

  genderChoices = [
    {name: 'Male', value: Gender.male},
    {name: 'Female', value: Gender.female}
  ];

  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.usersService.getAllUsers().subscribe(res => {
      this.dataSource = res;
      this.loading = false;
    }, err => { this.loading = false; })
  }

  onValueChange(user, fieldName, event) {
    const initial = Object.assign({}, user);
    user[fieldName] = event;
    this.usersService.patchUser(user).subscribe(res => {
      this.snackBar.open('Updated successfully', undefined, { duration: 2000 });
    }, err => {
      user = initial;
      this.snackBar.open('An error occured', undefined, { duration: 2000 });
    });
  }

}
