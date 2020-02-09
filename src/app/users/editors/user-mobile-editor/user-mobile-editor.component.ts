import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../users.service';

@Component({
  selector: 'app-user-mobile-editor',
  templateUrl: './user-mobile-editor.component.html',
  styleUrls: ['./user-mobile-editor.component.scss']
})
export class UserMobileEditorComponent {

  user: User;
  genderChoices: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {user: User, genderChoices: any[]}
  ) {
    this.user = data.user;
    this.genderChoices = data.genderChoices;
  }

  @Output() valueChanges = new EventEmitter();

}
