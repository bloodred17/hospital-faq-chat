import { Component, OnInit, signal } from '@angular/core';
import { HospitalChatService } from './hospital-chat.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { TextComponent } from '../ui/text.component';
import { AvatarDirective, ButtonDirective } from 'angular-material-tailwind';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-hospital-chat',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    ButtonDirective,
    NgTemplateOutlet,
    AvatarDirective,
  ],
  template: `
    <div class="h-screen flex flex-col">
      <div class="h-full pb-4 flex flex-col gap-4 overflow-y-scroll p-1 sm:p-2 lg:p-4">
        @for (conversation of conversations; track conversation.question) {
          <div class="flex gap-2 flex-col sm:flex-row">
            <div>
              <img
                src="gentleman.png"
                alt="avatar"
                mtAvatar
                [size]="'small'"
                class="rounded-full"
              />
            </div>
            <div>
              <ng-container [ngTemplateOutlet]="message" [ngTemplateOutletContext]="{$implicit: conversation.question}"></ng-container>
            </div>
          </div>
          <div class="flex justify-end gap-2 flex-col-reverse sm:flex-row">
            <div>
              <ng-container [ngTemplateOutlet]="message" [ngTemplateOutletContext]="{$implicit: conversation.answers[0]}"></ng-container>
            </div>
            <div class="flex justify-end sm:flex-none">
              <img src="lady.png"
                alt="avatar"
                mtAvatar
                [size]="'small'"
                class="rounded-full"
              />
              </div>
          </div>
        }
        @if (state() == 'sent' && question.length > 0) {
          <div class="flex gap-2 flex-col sm:flex-row">
            <div>
              <img
                src="gentleman.png"
                alt="avatar"
                mtAvatar
                [size]="'small'"
                class="rounded-full"
              />
            </div>
            <div>
              <ng-container [ngTemplateOutlet]="message" [ngTemplateOutletContext]="{$implicit: question}"></ng-container>
            </div>
          </div>
        }
      </div>
      <div class="flex-grow">
      </div>
      <div class="flex flex-col sm:flex-row gap-1 sm:gap-4 p-2 sm:p-4 rounded-lg">
        <div class="w-full">
          <app-text
          [label]="'Question'"
          [(value)]="question"
          ></app-text>
        </div>
        <div class="py-1">
          <button mtButton class="w-full h-full"
            (click)="askQuestion()"
          >Ask</button>
        </div>
      </div>
    </div>
    <ng-template let-text #message>
      <div class="rounded-lg shadow-md bg-slate-800 p-2 text-white w-fit">
        {{text}}
      </div>
    </ng-template>
  `
})
export class HospitalChatComponent implements OnInit {
  question = '';
  conversations: { question: string, answers: string[] }[] = [];
  state = signal<'draft' | 'sent'>('draft');

  constructor(private hospitalChatService: HospitalChatService) { }

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
        this.state.set('draft');
        this.conversations.push(conversation);
      });
    this.state.set('sent');
  }
}
