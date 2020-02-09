import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService, User, Gender } from './users.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { UserMobileEditorComponent } from './editors/user-mobile-editor/user-mobile-editor.component';

const DESKTOP_COLS = ['name', 'surname', 'dateOfBirth', 'gender'];
const MOBILE_COLS = ['name-surname', 'dateOfBirth', 'gender'];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = DESKTOP_COLS;
  loading = false;
  dataSource: User[];
  mobileQuery;

  genderChoices = [
    {name: 'Male', value: Gender.male},
    {name: 'Female', value: Gender.female}
  ];

  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private media: MediaMatcher,
    private dialog: MatDialog
  ) {
    this.mobileQuery = this.media.matchMedia('screen and (max-width: 959.9px)');

    this.setupColumns(this.mobileQuery);
    this.mobileQuery.addEventListener('change', () => {
      this.setupColumns(this.mobileQuery);
    });
  }

  ngOnInit() {
    this.loading = true;
    this.usersService.getAllUsers().subscribe(res => {
      this.dataSource = res;
      this.loading = false;
    }, err => { this.loading = false; });
  }

  onValueChange(user, fieldName, event) {
    const initial = Object.assign({}, user);
    user[fieldName] = event;
    if (initial[fieldName] !== user[fieldName]) {
      this.usersService.patchUser(user).subscribe(res => {
        this.snackBar.open('Updated successfully', undefined, { duration: 2000 });
      }, err => {
        user = initial;
        this.snackBar.open('An error occured', undefined, { duration: 2000 });
      });
    }
  }

  openMobileEditDialog(user: User) {
    if (this.mobileQuery.matches) {
    const dialog = this.dialog.open(UserMobileEditorComponent, {data: {user, genderChoices: this.genderChoices}});
    dialog.componentInstance.valueChanges.subscribe(res => this.onValueChange(res.user, res.fieldName, res.event));
    }
  }

  private setupColumns(mobileQuery) {
    if (mobileQuery.matches) {
      this.displayedColumns = MOBILE_COLS;
    } else {
      this.displayedColumns = DESKTOP_COLS;
    }
  }
}
