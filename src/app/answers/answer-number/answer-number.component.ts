import { Component, Input } from '@angular/core';
import { QuestionService } from 'src/app/question.service';

@Component({
  selector: 'app-answer-number',
  templateUrl: './answer-number.component.html',
  styleUrls: ['./answer-number.component.css']
})
export class AnswerNumberComponent {
  userInput;

  @Input() solution;

  constructor(private questionService: QuestionService) { }

  check() {
    if (this.userInput + '' === this.solution + '') {
      this.questionService.markCorrect();
     }
  }


}
