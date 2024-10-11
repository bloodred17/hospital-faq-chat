import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalChatService {
  domain = environment.api;

  constructor(private http: HttpClient) { }

  sendMessage(question: string): any {
    return this.http.post(
      this.domain + '/api/v1/mpnet_mnr_hospital_faq_dummy',
      { question }
    );
  }
}
