import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "./customer.service";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {data} from "autoprefixer";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicResponse} from "../../shared/basic-response";
import {clone} from "lodash-es";
import {FuseConfirmationService} from "../../../@fuse/services/confirmation";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, AfterViewInit {

  @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('inputFile') inputFile: ElementRef;
  progressBar = false;
  length = 0;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions = [5, 10, 15];
  cols = ['checkBox','id','firstName', 'lastName', 'street','city', 'postalCode', 'idNo', 'action']
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  searchCustomerForm: FormGroup = new FormGroup({});
  listSelect = new Array();
  file: File = null;
  successResponse;
  errorResponse;
  selection = new SelectionModel(true)
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private _fuseConfirmationService: FuseConfirmationService)
  {
    this.searchCustomerForm = this.fb.group({
      firstName: this.fb.control(undefined),
      lastName: this.fb.control(undefined),
      street: this.fb.control(undefined),
      city: this.fb.control(undefined),
      postalCode: this.fb.control(undefined),
      idNo: this.fb.control(undefined),
      action: this.fb.control(undefined)
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.recentTransactionsTableMatSort;
  }

  ngOnInit(): void {
    this.pageSize = 5;
    this.pageIndex = 0;

    this.searchCustomerForm = this.fb.group({
      firstName: ['', Validators.nullValidator],
      lastName: ['', Validators.nullValidator],
      street: ['', Validators.nullValidator],
      city: ['', Validators.nullValidator],
      postalCode: ['', Validators.nullValidator],
      idNo: ['', Validators.nullValidator],
    })
    this.search();
  }

  search(){
    this.selection.clear();
    const params = {
      customerDTO: this.searchCustomerForm.value,
      pageInfo: {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
    }

    this.customerService.search(params).subscribe(data => {
      if(data.result != null){
        this.progressBar = false;
        this.dataSource.data = data.result.content;
        this.length = data.result.totalElements;
      }else if(data.result == null && this.pageIndex > 0){
        this.pageIndex -= 1;
        this.search();
        this.progressBar = false;
      }else{
        this.progressBar = true;
      }

    }, error => {
      console.log(error);
    })
  }

  delete(id: any){
    const params = {
      id: id
    }
    this.customerService.delete(params).subscribe(data =>{
      this.search();
    }, error => {
      console.log(error);
    })
  }

  handlePageEvent(event: PageEvent){
    this.selection.clear();
    const params = {
      customerDTO: this.searchCustomerForm.value,
      pageInfo: {
        pageIndex: event.pageIndex,
        pageSize: event.pageSize
      }
    }

    this.customerService.search(params).subscribe(data =>{
      if(data != null){
        this.progressBar = false
        this.dataSource.data = data.result.content;
        this.length = data.result.totalElements;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
      }else{
        this.progressBar = true;
      }

    }, error => {
      console.log(error);
    })
  }

  handleCheckBoxEvent(event: MatCheckboxChange, id: any){
    if(event.checked){
      this.listSelect.push(id);
    }else if(!event.checked){
      this.listSelect.forEach((item,index) => {
        if(item === id) this.listSelect.splice(index,1);
      })
    }

  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    console.log(numSelected === numRows)
    return numSelected === numRows;
  }

  masterToggle(){
    if(this.isAllSelected()){
      this.selection.clear();
      this.listSelect.splice(0,this.listSelect.length);
    }else{
      this.dataSource.data.forEach(row => this.selection.select(row));
      this.dataSource.data.forEach(data => this.listSelect.push(data.id));
    }
  }

  deleteCustomers(){
    this.listSelect.forEach(id => this.delete(id));
  }

  onChange(event){
    this.file = event.target.files[0];
    this.customerService.upload(this.file).subscribe(data => {
      this.search();
      this.showSuccessDialog(data);
      this.clear();
    }, error => {
      this.clear();
      this.showErrorDialog();
    });

  }

  clear(){
    this.inputFile.nativeElement.value = '';
  }

  open(){
    window.open()
  }

  createInvoice(){

  }

  private showSuccessDialog(response: BasicResponse): void {
    this.successResponse = clone(response);
    this._fuseConfirmationService.open(
        {
          'title': 'Import file excel success',
          'message': '<br/><pre>'+"Thêm thành công: " + this.successResponse.result.saveCount + '<br/>' +
                      "Thêm lỗi: " + this.successResponse.result.errorCount +'</pre>',
          'icon': {
            'show': true,
            'name': 'mat_outline:check',
            'color': 'success'
          },
          'actions': {
            'confirm': {
              'show': true,
              'label': 'Close',
              'color': 'primary'
            },
            'cancel': {
              'show': false
            }
          },
          'dismissible': true
        }
    );
  }

  private showErrorDialog(): void {
    this._fuseConfirmationService.open(
        {
          'title': 'Import file excel error',
          'message': '<br/><pre>'+"File không hợp lệ "+'</pre>',
          'icon': {
            'show': true,
            'name': 'mat_outline:warning_amber',
            'color': 'error'
          },
          'actions': {
            'confirm': {
              'show': true,
              'label': 'Close',
              'color': 'primary'
            },
            'cancel': {
              'show': false
            }
          },
          'dismissible': true
        }
    );
  }
}
