import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Editor } from '../editor';

@Component({
  selector: 'app-choice-editor',
  templateUrl: './choice-editor.component.html',
  styleUrls: ['./choice-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoiceEditorComponent extends Editor {

  @Input() choices: {name: string, value: any}[];

  constructor() {
    super();
  }

  getChoiceName(value) {
    return this.choices.filter(e => e.value === value)[0].name;
  }

}
