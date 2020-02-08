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

  @Output() valueChange = new EventEmitter();

  @HostListener('click') onClick() {
    if (!this.editMode) {
      this.editMode = true;
    }
  }

  emitValue(event) {}
  revertChange(event) {}

}
