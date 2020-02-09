import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMobileEditorComponent } from './user-mobile-editor.component';

describe('UserMobileEditorComponent', () => {
  let component: UserMobileEditorComponent;
  let fixture: ComponentFixture<UserMobileEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMobileEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMobileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
