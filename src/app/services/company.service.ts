import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'company/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(this.apiUrl + 'get', this.httpOptions);
  }


  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + 'get' + id, this.httpOptions);
  }

  addCompany(company: Company): void {
    this.http.post(this.apiUrl + 'new', JSON.parse(JSON.stringify(company)), this.httpOptions).subscribe(res => console.log(res));
  }

  updateCompany(company: Company): void {
    this.http.put(this.apiUrl + company.id + '/edit', JSON.parse(JSON.stringify(company)), this.httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteCompany(id: number): void {
    this.http.delete(this.apiUrl + id + '/delete', this.httpOptions);
  }
}
