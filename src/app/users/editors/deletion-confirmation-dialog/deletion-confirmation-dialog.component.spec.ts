import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletionConfirmationDialogComponent } from './deletion-confirmation-dialog.component';

describe('DeletionConfirmationDialogComponent', () => {
  let component: DeletionConfirmationDialogComponent;
  let fixture: ComponentFixture<DeletionConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletionConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
