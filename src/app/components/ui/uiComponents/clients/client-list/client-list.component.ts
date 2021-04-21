import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Company} from '../../../../../models/company';
import {CompanyService} from '../../../../../services/company.service';
import {ContactService} from '../../../../../services/contact.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  companies: Company[];
  dataSource: MatTableDataSource<Company>;
  displayedColumns: string[] = ['id', 'name', 'adress', 'phoneNumber'];

  constructor(private companyService: CompanyService, private contactService: ContactService) {
    this.companies = [];
    this.dataSource = new MatTableDataSource<Company>();
  }

  async ngOnInit(): Promise<void> {
    this.companies = await this.getCompanies();
    this.dataSource = new MatTableDataSource<Company>(this.companies);
  }

  getCompanies(): Promise<Company[]> {
    return new Promise((resolve, reject) => {
      this.companyService.getAllCompanies().subscribe(companies => {
        resolve(companies);
      }, error => {
        reject(error.message);
      });
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
