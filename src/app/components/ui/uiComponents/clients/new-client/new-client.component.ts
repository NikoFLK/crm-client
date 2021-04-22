import { Component, OnInit } from '@angular/core';
import {Company} from '../../../../../models/company';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../../../../services/company.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  newCompany: Company;
  id: number | undefined;
  add: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService, private activedRoute: ActivatedRoute,) {
    this.newCompany = new Company();
    this.add = true;
  }

  ngOnInit(): void {
      this.id = this.activedRoute.snapshot.params.id;
    if (this.id === undefined) {
      this.add = true;
    } else {
      this.add = false;
      const id = this.id;
      // @ts-ignore
      this.companyService.getCompanyById(id).subscribe((a: Company[]) => {
        this.newCompany = a[0];
        console.log(a[0]);
      });
    }
  }

  onSubmit(): void {
    if (this.add){
      this.companyService.addCompany(this.newCompany);
      this.router.navigate(['/clients']);
    }else {
      this.companyService.updateCompany(this.newCompany);
      this.router.navigate(['/clients']);
    }
  }
}
