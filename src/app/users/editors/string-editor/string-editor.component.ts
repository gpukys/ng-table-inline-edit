import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Editor } from '../editor';

@Component({
  selector: 'app-string-editor',
  templateUrl: './string-editor.component.html',
  styleUrls: ['./string-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringEditorComponent extends Editor {

  constructor() {
    super();
  }

}
