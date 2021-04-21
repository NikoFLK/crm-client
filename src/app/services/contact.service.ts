import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = 'contact/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllContactsFromCompany(companyId: number): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(this.apiUrl + 'get', this.httpOptions);
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl + 'get' + id, this.httpOptions);
  }

  addContact(contact: Contact): void {
    this.http.post(this.apiUrl + 'new', JSON.parse(JSON.stringify(contact)), this.httpOptions).subscribe(res => console.log(res));
  }

  updateContact(contact: Contact): void {
    this.http.put(this.apiUrl + contact.id + '/edit', JSON.parse(JSON.stringify(contact)), this.httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteContact(id: number): void {
    this.http.delete(this.apiUrl + id + '/delete', this.httpOptions);
  }
}
