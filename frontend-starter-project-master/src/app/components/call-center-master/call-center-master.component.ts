// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
// import { CallCenterService } from 'app/core/service/support/callcenter.service';
// import {concat, Observable, of, Subject} from "rxjs";
// import {AfterViewInit, ChangeDetectorRef, Injector, OnDestroy, ViewChild} from "@angular/core";
// import {MatTableDataSource} from "@angular/material/table";
// import {MatSort} from "@angular/material/sort";
// // import {PagingCommonComponent} from "../../../../core/shared-component/paging-common/paging-common.component";
// import {debounceTime, distinctUntilChanged, map, startWith} from "rxjs/operators";
// // import {BaseComponent} from "app/views/pages/base/base.component";
// import {PageEvent} from "@angular/material/paginator";

// @Component({
//   selector: 'app-call-center-master',
//   templateUrl: './call-center-master.component.html',
//   styleUrls: ['./call-center-master.component.scss']
// })
// export class CallCenterMasterComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy  {

//   stationControl = new FormControl();
//   searchConditionForm: FormGroup = new FormGroup({});
//   pageIndex = 1;
//   pageSize = 10;
//   @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;
//   @ViewChild('paginator', {static: true}) paginator: PagingCommonComponent;
//   totalRecords: number;
//   dataDisplay = [];
//   cols = ['id','contactName','priority','subject','created','createReason','assigneeName','status','customerPhoneNumber'];
//   dataSource: MatTableDataSource<any> = new MatTableDataSource(this.cols);
//   pageSizeOptions: number[] = [5, 10, 12, 15];
//   length: number;
//   progressBar = true;
//   stationCode$: Observable<string[]>;
//   stationCodeInput$ = new Subject<string>();
//   stationCode: any;
//   area_ID: any;
//   sysGroupCode: any;
//   constructionCode: any;
//   constructor(private callCenterService: CallCenterService,
//     protected changeDetectorRef: ChangeDetectorRef,
//     private fb: FormBuilder,
//     protected injector: Injector
//     ) {
//     super(injector);
      
//       this.searchConditionForm = this.fb.group(
//         {
//           code: this.fb.control(undefined),
//           name: this.fb.control(undefined),
//           phone: this.fb.control(undefined),
//           pageIndex: this.fb.control(undefined),
//           pageSize: this.fb.control(undefined),
//           source: this.fb.control(undefined),
//           taxCode: this.fb.control(undefined),
//         }
//     );
//     }
  
//     ngAfterViewInit(): void {
//       this.dataSource.sort = this.recentTransactionsTableMatSort;
//     }

//   ngOnInit(): void {
//     this.pageIndex=0;
//     this.pageSize=10;
    
//     this.search();
//   }
//   search() {
//     const params = {
//       code: this.searchConditionForm.get('code').value,
//       name: this.searchConditionForm.get('name').value,
//       phone: this.searchConditionForm.get('phone').value,
//       source: this.searchConditionForm.get('source').value,
//       taxCode: this.searchConditionForm.get('taxCode').value,
//       pageIndex: this.pageIndex,
//       pageSize: this.pageSize
//     };
//     this.callCenterService.searchCallCenter(params).subscribe((res: any) => {
//       if (res) {
//         console.log(res.data);
//         this.progressBar = false;
//         this.dataDisplay = res.data;
//         this.totalRecords = res.count;
//         this.changeDetectorRef.detectChanges();
//         this.dataSource = res.data;
//         this.length=res.count;
//       }else{
//       }
//     },(error:any)=>{
//       this.dataSource = null;
//     });
//   }
//   handlePageEvent(event: PageEvent) {

//     const params = {
//       code: this.searchConditionForm.get('code').value,
//       name: this.searchConditionForm.get('name').value,
//       phone: this.searchConditionForm.get('phone').value,
//       source: this.searchConditionForm.get('source').value,
//       taxCode: this.searchConditionForm.get('taxCode').value,
//       pageIndex: event.pageIndex,
//       pageSize: event.pageSize
//     };
//     this.callCenterService.searchCallCenter(params).subscribe((res: any)=>{
//       console.log(res.data);
//       this.progressBar = false;
//       this.dataDisplay = res.data;
//       this.totalRecords = res.count;
//       this.changeDetectorRef.detectChanges();
//       this.dataSource = res.data;
//       this.length=res.count;
//     });
//     return event;
//   }

// }
