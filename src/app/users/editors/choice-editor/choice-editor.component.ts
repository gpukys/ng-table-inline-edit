import { Component, OnInit, Input } from '@angular/core';
import { Editor } from '../editor';

@Component({
  selector: 'app-choice-editor',
  templateUrl: './choice-editor.component.html',
  styleUrls: ['./choice-editor.component.scss']
})
export class ChoiceEditorComponent extends Editor {

  @Input() choices: {name: string, value: any}[];

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
