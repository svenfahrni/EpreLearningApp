import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSelectTextComponent } from './answer-select-text.component';

describe('AnswerSelectTextComponent', () => {
  let component: AnswerSelectTextComponent;
  let fixture: ComponentFixture<AnswerSelectTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSelectTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSelectTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
