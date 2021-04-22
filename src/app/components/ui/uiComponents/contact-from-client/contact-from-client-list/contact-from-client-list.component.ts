import { Component, OnInit } from '@angular/core';
import {Company} from '../../../../../models/company';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyService} from '../../../../../services/company.service';
import {ContactService} from '../../../../../services/contact.service';
import {Contact} from '../../../../../models/contact';

@Component({
  selector: 'app-contact-from-client-list',
  templateUrl: './contact-from-client-list.component.html',
  styleUrls: ['./contact-from-client-list.component.css']
})
export class ContactFromClientListComponent implements OnInit {
  contactsCompany: Company;
  contacts: Contact[];
  dataSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'phoneNumber', 'job'];

  constructor(private contactService: ContactService) {
    this.contactsCompany = new Company(); // TODO, retrouver le paramètre depuis la data passée par le modal
    this.contacts = [];
    this.dataSource = new MatTableDataSource<Contact>();
  }

  async ngOnInit(): Promise<void> {
    this.contacts = await this.getContactsFromCompany();
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
  }

  getContactsFromCompany(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      this.contactService.getAllContactsFromCompany(this.contactsCompany.id).subscribe(contacts => {
        resolve(contacts);
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
