import { NgModule } from '@angular/core';
import { DateEditorComponent } from './editors/date-editor/date-editor.component';
import { StringEditorComponent } from './editors/string-editor/string-editor.component';
import { ChoiceEditorComponent } from './editors/choice-editor/choice-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    DateEditorComponent,
    StringEditorComponent,
    ChoiceEditorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DateEditorComponent,
    StringEditorComponent,
    ChoiceEditorComponent
  ],
  providers: [
    DatePipe
  ]
})
export class UsersModule { }
