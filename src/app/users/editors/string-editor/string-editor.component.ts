import { Component, OnInit } from '@angular/core';
import { Editor } from '../editor';

@Component({
  selector: 'app-string-editor',
  templateUrl: './string-editor.component.html',
  styleUrls: ['./string-editor.component.scss']
})
export class StringEditorComponent extends Editor {

  constructor() {
    super();
  }

  emitValue(event) {
    this.valueChange.emit(this.value);
    this.initialValue = this.value;
    this.editMode = false;
    event.stopPropagation();
  }

  revertChange(event) {
    this.value = this.initialValue;
    this.emitValue(event);
  }

}
