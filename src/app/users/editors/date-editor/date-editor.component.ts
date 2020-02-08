import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Editor } from '../editor';

@Component({
  selector: 'app-date-editor',
  templateUrl: './date-editor.component.html',
  styleUrls: ['./date-editor.component.scss']
})
export class DateEditorComponent extends Editor {

  constructor(
    private dateFormat: DatePipe
  ) {
    super();
  }

  emitValue(event) {
    this.valueChange.emit(this.dateFormat.transform(this.value, 'yyyy-MM-dd'));
    this.initialValue = this.value;
    this.editMode = false;
    event.stopPropagation();
  }

  revertChange(event) {
    this.value = this.initialValue;
    this.emitValue(event);
  }

}
