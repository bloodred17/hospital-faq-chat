import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalChatService {
  // domain = 'http://104.248.168.9:8000';
  domain = 'http://0.0.0.0:8000';

  constructor(private http: HttpClient) {}

  sendMessage(question: string): any {
    return this.http.post(
      this.domain + '/api/v1/mpnet_mnr_hospital_faq_dummy',
      {question}
    );
  }
}
