import { NgModule } from '@angular/core';
import { DateEditorComponent } from './editors/date-editor/date-editor.component';
import { StringEditorComponent } from './editors/string-editor/string-editor.component';
import { ChoiceEditorComponent } from './editors/choice-editor/choice-editor.component';
import { SharedModule } from '../shared.module';
import { DatePipe } from '@angular/common';
import { DeletionConfirmationDialogComponent } from './editors/deletion-confirmation-dialog/deletion-confirmation-dialog.component';
import { EditorControlsComponent } from './editors/editor-controls/editor-controls.component';
import { UsersService } from './users.service';
import { UserMobileEditorComponent } from './editors/user-mobile-editor/user-mobile-editor.component';



@NgModule({
  declarations: [
    DateEditorComponent,
    StringEditorComponent,
    ChoiceEditorComponent,
    DeletionConfirmationDialogComponent,
    EditorControlsComponent,
    UserMobileEditorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DateEditorComponent,
    StringEditorComponent,
    ChoiceEditorComponent,
    DeletionConfirmationDialogComponent
  ],
  providers: [
    DatePipe,
    UsersService
  ],
  entryComponents: [
    DeletionConfirmationDialogComponent,
    UserMobileEditorComponent
  ]
})
export class UsersModule { }
