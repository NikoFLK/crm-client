import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Company} from '../../../../../models/company';
import {Contact} from '../../../../../models/contact';
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
  displayedColumns: string[] = ['id', 'name', 'address', 'phone_number'];

  constructor(private companyService: CompanyService, private contactService: ContactService) {
    this.companies = [];
    this.dataSource = new MatTableDataSource<Company>();
    companyService.getAllCompanies().subscribe(companies => {
      this.dataSource = new MatTableDataSource<Company>(companies);
    });
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
