import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ContactService} from '../../../../../services/contact.service';
import {Contact} from '../../../../../models/contact';
import {ContactFromClientCreateComponent} from '../contact-from-client-create/contact-from-client-create.component';

@Component({
  selector: 'app-contact-from-client-list',
  templateUrl: './contact-from-client-list.component.html',
  styleUrls: ['./contact-from-client-list.component.css']
})
export class ContactFromClientListComponent implements OnInit {
  idContactsCompany: number;
  nameContactsCompany: string;
  contacts: Contact[];
  dataSource: MatTableDataSource<Contact>;
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'phoneNumber', 'job', 'actions'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private contactService: ContactService, private dialog: MatDialog) {
    this.idContactsCompany = this.data.idContactsCompany;
    this.nameContactsCompany = this.data.nameContactsCompany;
    this.contacts = [];
    this.dataSource = new MatTableDataSource<Contact>();
  }

  async ngOnInit(): Promise<void> {
    this.contacts = await this.getContactsFromCompany();
    this.dataSource = new MatTableDataSource<Contact>(this.contacts);
  }

  getContactsFromCompany(): Promise<Contact[]> {
    return new Promise((resolve, reject) => {
      this.contactService.getAllContactsFromCompany(this.idContactsCompany).subscribe(contacts => {
        resolve(contacts);
      }, error => {
        reject(error.message);
      });
    });
  }

  contactModificationDialog(id: number | undefined): void {
    const dialogRef = this.dialog.open(ContactFromClientCreateComponent, {
      width: '60%',
      height: '50%',
      data: {
        idContact: id,
        contactCompanyId: this.idContactsCompany
      }
    });
  }

  contactDeletion(id: number): void {

  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
