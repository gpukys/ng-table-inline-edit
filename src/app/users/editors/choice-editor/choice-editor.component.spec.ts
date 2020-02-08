import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceEditorComponent } from './choice-editor.component';

describe('ChoiceEditorComponent', () => {
  let component: ChoiceEditorComponent;
  let fixture: ComponentFixture<ChoiceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
