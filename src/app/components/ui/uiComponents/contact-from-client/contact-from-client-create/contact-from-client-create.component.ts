import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../../../../services/contact.service';
import {Contact} from '../../../../../models/contact';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-from-client-create',
  templateUrl: './contact-from-client-create.component.html',
  styleUrls: ['./contact-from-client-create.component.css']
})
export class ContactFromClientCreateComponent implements OnInit {
  contactCompanyId: number;
  newContact: Contact;
  id: number | undefined;
  add: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router, private route: ActivatedRoute,
              private contactService: ContactService) {
    this.contactCompanyId = this.data.contactCompanyId;
    this.id = this.data.idContact;
    this.newContact = new Contact();
    this.add = true;
  }

  ngOnInit(): void {
    if (this.id === undefined) {
      this.add = true;
    } else {
      this.add = false;
      const id = this.id;
      // @ts-ignore
      this.contactService.getContactById(id).subscribe((a: Contact[]) => {
        this.newContact = a[0];
        console.log(a[0]);
      });
    }
  }

  onSubmit(): void {
    if (this.add){
      this.contactService.addContact(this.newContact);
      this.router.navigate(['/contact']);
    }else {
      this.contactService.updateContact(this.newContact);
      this.router.navigate(['/contact']);
    }
  }
}
