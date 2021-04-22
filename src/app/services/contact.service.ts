import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from '../models/contact';
import {Observable} from 'rxjs';
import {Company} from '../models/company';

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
    return this.http.post<Array<Contact>>(this.apiUrl + 'get', {company_id: companyId}, this.httpOptions);
  }

  getContact(filter: object): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + 'get', filter, this.httpOptions);
  }

  getContactById(id: number): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl + 'get', {id}, this.httpOptions);
  }

  addContact(contact: Contact): void {
    this.http.post(this.apiUrl + 'new', {
      company_id: contact.companyId,
      name: contact.name,
      last_name: contact.lastName,
      phone_number: contact.phoneNumber,
      email: contact.email,
      job: contact.job
    }, this.httpOptions).subscribe(res => console.log(res));
  }

  updateContact(contact: Contact): void {
    this.http.put(this.apiUrl + contact.id + '/edit', {
      company_id: contact.companyId,
      name: contact.name,
      last_name: contact.lastName,
      phone_number: contact.phoneNumber,
      email: contact.email,
      job: contact.job
    }, this.httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteContact(id: number): void {
    this.http.delete(this.apiUrl + id + '/delete', this.httpOptions);
  }
}
