import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AnswerNumberComponent } from './answers/answer-number/answer-number.component';
import { QuestionService } from './question.service';
import { AnswerSelectTextComponent } from './answers/answer-select-text/answer-select-text.component';
import { AppRoutingModule } from './app.routing';
import { EvaluationComponent } from './evaluation/evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    QuestionnaireComponent,
    AnswerNumberComponent,
    AnswerSelectTextComponent,
    EvaluationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatChipsModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
