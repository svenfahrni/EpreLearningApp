import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-answer-select-text',
  templateUrl: './answer-select-text.component.html',
  styleUrls: ['./answer-select-text.component.css']
})
export class AnswerSelectTextComponent implements OnInit {

  @Input() answers: any[];

  constructor(private renderer: Renderer2, private questionService: QuestionService) { }

  ngOnInit() {
  }

  check(event: any, answer: any) {
    if (answer.correct) {
      this.renderer.addClass(event.target, 'correct');
      this.questionService.markCorrect();
    } else {
      this.renderer.addClass(event.target, 'wrong');
    }
  }
}
