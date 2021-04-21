import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from '../models/company';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'http://localhost:8000/company/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Array<Company>> {
    return this.http.post<Array<Company>>(this.apiUrl + 'get',{}, this.httpOptions);
  }

  getCompany(filter: object): Observable<Company> {
    return this.http.post<Company>(this.apiUrl + 'get',filter, this.httpOptions);
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.post<Company>(this.apiUrl + 'get', {id:id}, this.httpOptions);
  }

  addCompany(company: Company): void {
    this.http.post(this.apiUrl + 'new', {
      name: company.name,
      email: company.email,
      phone_number: company.phoneNumber,
      prospect: company.prospect,
      facturation_adress: company.facturationAdress,
      adress: company.adress,
      notes: company.notes
    }, this.httpOptions).subscribe(res => console.log(res));
  }

  updateCompany(company: Company): void {
    this.http.put(this.apiUrl + company.id + '/edit',
      {
        name: company.name,
        email: company.email,
        phone_number: company.phoneNumber,
        prospect: company.prospect,
        facturation_adress: company.facturationAdress,
        adress: company.adress,
        notes: company.notes
      },
      this.httpOptions)
      .subscribe(res => console.log(res));
  }

  deleteCompany(id: number): void {
    this.http.delete(this.apiUrl + id + '/delete', this.httpOptions);
  }
}
