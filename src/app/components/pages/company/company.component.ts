import { Component, OnInit } from '@angular/core';
import {Company} from "../../../models/company";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../../services/company.service";


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  newCompany: Company;
  id: number | undefined;
  add: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService) {
    this.newCompany = new Company();
    this.add = true;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    })
    if (this.id === undefined){
      this.add = true;
    }else{
      this.add = false;
      let id = this.id;
      // @ts-ignore
      this.companyService.getCompanyById(id).subscribe((a: Company[]) => {
        this.newCompany = a[0];
        console.log(a[0]);
      });
    }
  }

  onSubmit():void {
    if (this.add){
      this.companyService.addCompany(this.newCompany);
      this.router.navigate(['/company']);
    }else {
      this.companyService.updateCompany(this.newCompany);
      this.router.navigate(['/company']);
    }
  }
}
