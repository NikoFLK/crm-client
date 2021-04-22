import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  apiUrl = 'http://localhost:8000/mail/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'multipart/form-data'
    })
  };

  constructor(private http: HttpClient) { }

  sendEmail(emailBody: string, attachment: Blob): void {
    const emailFormData = new FormData();
    emailFormData.append('body', emailBody);
    if (attachment)
      emailFormData.append('attachment', attachment);
  this.http.post(this.apiUrl+"send", emailFormData, this.httpOptions).subscribe(res => {
    console.log(res);
  });
  }
}
