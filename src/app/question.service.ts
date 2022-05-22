import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionIndex = 0;

  questions = [
    { question: 'Was ergibt 1 + 1?', type: 'number', solution: 2},
    {
      question: 'Welches Tier ist das schwerste?',
      type: 'selecttext',
      answers: [
        { label: 'Rotbarsch', correct: false },
        { label: 'Kamel', correct: false },
        { label: 'Truthan', correct: false },
        { label: 'Elefant', correct: true }
      ]
    },
    {
      question: 'Wie heisst diese Zahl: 11',
      type: 'selecttext',
      answers: [
        { label: 'Neun', correct: false },
        { label: 'Acht', correct: false },
        { label: 'Sechzehn', correct: false },
        { label: 'Elf', correct: true }
      ]
    },
    { question: 'Was ergibt 5 * 3 + 2?', type: 'number', solution: 17},
    {
      question: 'Was bedeutet Bonjour?',
      type: 'selecttext',
      answers: [
        { label: 'Guten Tag', correct: true },
        { label: 'Mahlzeit', correct: false },
        { label: 'Gute Nacht', correct: false },
        { label: 'Abendessen', correct: false }
      ]
    },
    {
      question: 'Ich fliege ___ Sommer auf Portugal?',
      type: 'selecttext',
      answers: [
        { label: 'um', correct: false },
        { label: 'nach', correct: false },
        { label: 'wegen', correct: false },
        { label: 'im', correct: true }
      ]
    }
  ];

  score = 0;

  private currentQuestionIsCorrect = false;

  get currentQuestion() {
    return this.questions[Math.min(this.questionIndex, this.questions.length - 1)];
  }

  get progress(): number {
    return 100 / this.questions.length * this.questionIndex;
  }


  get isCompleted() {
    return this.questions.length === this.questionIndex + 1;
  }


  markCorrect() {
    this.currentQuestionIsCorrect = true;
  }

  isCorrect() {
    return this.currentQuestionIsCorrect;
  }

  next() {
    this.questionIndex++;
    this.currentQuestionIsCorrect = false;
    this.score += 10;
  }
}
