import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerNumberComponent } from './answer-number.component';

describe('AnswerNumberComponent', () => {
  let component: AnswerNumberComponent;
  let fixture: ComponentFixture<AnswerNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
