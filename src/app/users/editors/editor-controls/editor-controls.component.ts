import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletionConfirmationDialogComponent } from '../deletion-confirmation-dialog/deletion-confirmation-dialog.component';

@Component({
  selector: 'app-editor-controls',
  templateUrl: './editor-controls.component.html',
  styleUrls: ['./editor-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorControlsComponent {

  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(
    private dialog: MatDialog
  ) { }

  openDeleteConfirmationDialog() {
    this.dialog
    .open(DeletionConfirmationDialogComponent)
    .beforeClosed()
    .subscribe(shouldDelete => {
      if (shouldDelete) {
        this.delete.emit();
      }
    })
  }

}
