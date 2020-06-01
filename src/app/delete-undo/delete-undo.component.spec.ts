import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUndoComponent } from './delete-undo.component';

describe('DeleteUndoComponent', () => {
  let component: DeleteUndoComponent;
  let fixture: ComponentFixture<DeleteUndoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUndoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
