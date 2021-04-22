import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Company} from '../../../../../models/company';
import {CompanyService} from '../../../../../services/company.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {MailComponent} from '../../../../pages/mail/mail.component';
import {ContactFromClientListComponent} from '../../contact-from-client/contact-from-client-list/contact-from-client-list.component';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  companies: Company[];
  dataSource: MatTableDataSource<Company>;
  displayedColumns: string[] = ['id', 'name', 'adress', 'phoneNumber', 'email', 'actions'];

  constructor(private companyService: CompanyService, public dialog: MatDialog) {
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

  clientDeletion(id: number): void {

  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sendMailDialog(email: any): void {
    const dialogRef = this.dialog.open(MailComponent, {
      width: '300px',
      height: '150px',
      data: {
        dataKey: email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  contactsListDialog(idCompany: number, nameCompany: string): void {
    const dialogRef = this.dialog.open(ContactFromClientListComponent, {
      width: '75%',
      height: '60%',
      data: {
        idContactsCompany: idCompany,
        nameContactsCompany: nameCompany
      }
    });
  }
}
