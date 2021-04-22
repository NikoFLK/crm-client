import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  private mailPdf: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectFile(event: number) {
    if (event > 0) {
      this.mailPdf = event;
    }
  }


}
