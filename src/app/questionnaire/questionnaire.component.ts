import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import * as confetti from 'canvas-confetti';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  showWrongAnimation = false;

  currentQuestion;

  @ViewChild('canvas') canvas;

  constructor(public questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    this.currentQuestion = this.questionService.currentQuestion;
  }

  next() {
    if (this.questionService.isCorrect()) {
      this.startRightAnimation();

      setTimeout(_ => {
        this.questionService.next();
        this.currentQuestion = this.questionService.currentQuestion;

        if (this.questionService.isCompleted) {
          console.log(0);
          this.router.navigate(['/evaluation']);
        }
      }, 300);


    } else {
      this.startWrongAnimation();
    }
  }

  startWrongAnimation() {
    this.showWrongAnimation = true;
    setTimeout(_ => this.showWrongAnimation = false, 300);
  }

  startRightAnimation() {
    const myConfetti = confetti.create(this.canvas.nativeElement, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.95 }
    });
  }

}
