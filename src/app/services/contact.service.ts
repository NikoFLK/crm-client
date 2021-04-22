import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs';
import {Company} from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl = 'http://localhost:8000/contact/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllContactsFromCompany(companyId: number): Observable<Array<Contact>> {
    return this.http.post<Array<Contact>>(this.apiUrl + 'get', {company_id: companyId}, this.httpOptions);
  }

  getContact(filter: object): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + 'get', filter, this.httpOptions);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + 'get', {id:id}, this.httpOptions);
  }

  addContact(contact: Contact): void {
    this.http.post(this.apiUrl + contact.companyId +'/new', {
      name: contact.name,
      lastname: contact.lastname,
      phone_number: contact.phoneNumber,
      email: contact.email,
      job: contact.job,
      notes: "oui"
    }, this.httpOptions).subscribe(res => console.log(res));
  }

  updateContact(contact: Contact): void {
    this.http.put(this.apiUrl + contact.id + '/edit', {
      name: contact.name,
      lastname: contact.lastname,
      phone_number: contact.phoneNumber,
      email: contact.email,
      job: contact.job,
      notes: "oui"
    }, this.httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteContact(id: number): void {
    this.http.delete(this.apiUrl + id + '/delete', this.httpOptions);
  }
}
