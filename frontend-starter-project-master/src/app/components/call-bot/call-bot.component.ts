import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { concat, Observable, of, Subject } from "rxjs";
import { AfterViewInit, ChangeDetectorRef, Injector, OnDestroy, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { CallBotService } from './call-bot.service';
import { DatePipe } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { fuseAnimations } from '@fuse/animations';
import { Customer } from './customer';

@Component({
  selector: 'app-call-bot',
  templateUrl: './call-bot.component.html',
  styleUrls: ['./call-bot.component.scss'],

})
export class CallBotComponent implements OnInit, AfterViewInit {
  stationControl = new FormControl();
  searchConditionForm: FormGroup = new FormGroup({});
  pageIndex = 0;
  pageSize = 3;  
  @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  totalRecords: number;
  dataDisplay = [];
  // cols = ['area_ID','birthday','job','NAME','source','tax_CODE','zip_CODE','updated_AT','action'];
  cols = ['id', 'customerPhone', 'callAt','pickupAt', 'status', 'delete'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.cols);
  // dataSource =[];
  pageSizeOptions: number[] = [5, 10, 12, 15];
  length: number = 3;
  progressBar = false;

  constructor(
    private callBotService: CallBotService,
    protected changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private datepipe: DatePipe
  ) {
    this.searchConditionForm = this.fb.group(
      {
        status: this.fb.control(undefined),
        customerPhone: this.fb.control(undefined),
        callAt: this.fb.control(undefined),
        pageIndex: this.fb.control(undefined),
        pageSize: this.fb.control(undefined)
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.recentTransactionsTableMatSort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.pageIndex = 0;
    this.pageSize = 5;
    this.dataSource.paginator = this.paginator;
    this.searchConditionForm = this.fb.group(
      {
        customerPhone: ['', [Validators.nullValidator, Validators.pattern('[1-9]+([0-9])*')]],
        callAt: ['', Validators.nullValidator],
        status: ['', Validators.nullValidator],
        pickupAt: ['', Validators.nullValidator],
      }
    )
    this.search();
  }

  // formatDateTime(s: any): any{
  //     return this.datepipe.transform(new Date(s), 'dd/MM/yyyy')
  // }

  search(){
    const params = {
      customerDTO: this.searchConditionForm.value,
      pageInfo:{
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
    }
    this.callBotService.search(params).subscribe(data => {
      if(params.pageInfo.pageIndex > 0 && data.result == null){
        this.pageIndex = params.pageInfo.pageIndex - 1;
        this.search();
      }else if(data.success == true){
        this.progressBar = false;
        this.dataSource = data.result.content;
        this.length = data.result.totalElements;
      }else{
        this.progressBar = true;
        this.length = 0;
      }
    }, error => {
      console.log(error);
    })
  }

  delete(id:any){
    this.callBotService.delete(id).subscribe(data => {
      this.search();
    },error => {
      console.log(error);
    })
  }

  handlePageEvent(event: PageEvent) {
    const params = {
      customerDTO:{
        customerPhone: this.searchConditionForm.get('customerPhone').value,
        callAt: this.searchConditionForm.get('callAt').value,
        pickupAt: this.searchConditionForm.get('pickupAt').value,
        status: this.searchConditionForm.get('status').value
      },
      pageInfo:{
        pageIndex: event.pageIndex,
        pageSize: event.pageSize
      }
      
    };

    this.callBotService.search(params).subscribe((res: any) => {
      if(res.success == true){
        this.progressBar = false;
        this.dataDisplay = res.result.content;
        this.totalRecords = res.result.totalElements;
        this.changeDetectorRef.detectChanges();
        this.dataSource = res.result.content;
        this.length = res.result.totalElements;
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
      }else{
        this.progressBar = true;
      }

    });
    return event;
  }
  
}
