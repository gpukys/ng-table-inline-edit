import { Input, Output, EventEmitter, HostListener } from '@angular/core';

export class Editor {
  editMode = false;
  initialValue;
  private VALUE;

  @Input()
  set value(val) {
    this.VALUE = val;
    if (this.initialValue === undefined) {
      this.initialValue = val;
    }
  }
  get value() { return this.VALUE; }

  @Input() clickable = true;

  @Output() valueChange = new EventEmitter();

  @HostListener('click') onClick() {
    if (!this.editMode && this.clickable) {
      this.editMode = true;
    }
  }

  constructor() { }

  emitValue(event?) {
    this.valueChange.emit(this.value);
    this.initialValue = this.value;
    this.editMode = false;
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }
  }

  revertChange(event) {
    this.value = this.initialValue;
    this.emitValue(event);
  }

  deleteValue() {
    this.value = null;
    this.emitValue();
  }

}
