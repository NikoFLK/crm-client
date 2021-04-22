import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MailService} from '../../../services/mail.service';

@Component(
  {
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  private mailPdf: any;
  private mailForm: FormGroup | any;
  public isLoadingResults: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
              private mailService: MailService,  public dialogRef: MatDialogRef<MailComponent>) { }

  ngOnInit(): void {
    this.isLoadingResults = false;
    console.log(this.data.dataKey);
   }

  selectFile(event: number): void {
    if (event > 0) {
      this.mailPdf = event;
    }
  }

  onFormSubmit(): void {
    this.mailService.sendEmail(this.data.dataKey, this.mailPdf);
    this.dialogRef.close();
  }
}
