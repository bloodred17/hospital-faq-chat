import {Component, OnInit} from '@angular/core';
import {HospitalChatService} from './hospital-chat.service';
import {FormsModule} from '@angular/forms';
import {map} from 'rxjs';

@Component({
  selector: 'app-hospital-chat',
  standalone: true,
  imports: [
    FormsModule,
  ],
  template: `
    <div>
      @for (conversation of conversations; track conversation.question) {
        <div class="bg-green-200">
          {{conversation.question}}
        </div>
        <div class="bg-blue-200">
          {{conversation.answers[0]}}
        </div>
        @if (question.length > 0) {
          <div class="bg-green-200">
            {{question}}
          </div>
        }
      }
    </div>
    <input placeholder="Ask Question here..." [(ngModel)]="question">
    <button (click)="askQuestion()">Ask</button>
  `
})
export class HospitalChatComponent implements OnInit {
  question = '';
  conversations: {question: string, answers: string[]}[] = [];

  constructor(private hospitalChatService: HospitalChatService) {}

  ngOnInit() {
  }

  askQuestion() {
    this.hospitalChatService.sendMessage(this.question)
      .pipe(
        // tap((response) => console.log(response)),
        map((response: any) => response?.answer),
      )
      .subscribe((answers: string[]) => {
        let conversation = {
          question: this.question,
          answers
        };
        this.question = '';
        this.conversations.push(conversation);
      })
  }
}
