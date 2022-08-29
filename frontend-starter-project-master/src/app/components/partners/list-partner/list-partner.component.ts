import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicResponse } from 'app/shared/basic-response';
import { Partner } from '../partner';
import { MatSort } from "@angular/material/sort";
import { PartnerService } from '../partner.service';
import { MatTableDataSource } from "@angular/material/table";
import { FormBuilder, FormGroup } from '@angular/forms';
import { AfterViewInit, ChangeDetectorRef, Injector, OnDestroy } from "@angular/core";
@Component({
  selector: 'app-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.scss']
})
export class ListPartnerComponent implements OnInit {
  searchConditionForm: FormGroup = new FormGroup({});
  @ViewChild('recentTransactionsTable', { read: MatSort }) 
  recentTransactionsTableMatSort: MatSort;
  cols = ['name','address','businessType','businessRegistrationNo','description','email','primaryPhone','secondaryPhone'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  name: string
  constructor(
    private partnerService: PartnerService,
    private fb: FormBuilder
  ) {
    this.searchConditionForm = this.fb.group(
      {
        id: this.fb.control(undefined),
        name: this.fb.control(undefined),
        businessType: this.fb.control(undefined),
        businessRegistrationNo: this.fb.control(undefined),
        description: this.fb.control(undefined),
        email: this.fb.control(undefined),
        primaryPhone: this.fb.control(undefined),
        secondaryPhone: this.fb.control(undefined)
      }
    );
   }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() : void{
    this.partnerService.getPartners().subscribe(
      (data) => {
        this.dataSource = data.result;
        console.log(this.dataSource);
      },
      error => {
        console.log(error);
      }
    )
  }

  search():void{
    this.name = this.searchConditionForm.value.name;
    this.partnerService.findByName(this.name).subscribe(
      data => {
        this.dataSource = data.result;
        console.log(this.dataSource)
      }
    )
  }
}
