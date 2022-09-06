import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InvoiceService} from "../invoice.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../customer/customer.service";
import {List} from "postcss/lib/list";


export class DialogData {
  id;
  productId: any;
  item: string;
  price: any;
  vat:any;
  quantity:any;
}

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {
  items: DialogData[];
  customerId;
  customer;
  customers;
  cols = ['id','date','total','action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  colsDetail = ['name','price','vat','quantity','total'];
  dataSourceDetail: MatTableDataSource<any> = new MatTableDataSource<any>();
  detail: boolean = false;
  invoices;
  listProductId: any[];
  total = new Map<any,any>();
  constructor(private invoiceService: InvoiceService,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.getAllCustomer();

  }

  getAllCustomer(){
    this.customerService.getAll().subscribe(data => {
      if(data.result != null){
        this.customers = data.result;
        this.customerId = this.customers[0].id;
        this.getCustomer(this.customerId);
        this.findInvoiceByCustomerId(this.customerId);
      }

    }, error => {
      console.log(error)
    })
  }

  getCustomer(id: any){
    this.customerService.findById(id).subscribe(data => {
      if(data.result != null){
        this.customer = data.result;
        this.findInvoiceByCustomerId(id);
      }
    })
  }

  findInvoiceByCustomerId(customerId: any){
    this.detail = false;
    this.invoiceService.findByCustomerId(customerId).subscribe(data => {
      this.dataSource.data = data.result;
    }, error => {
      console.log(error);
    })
  }

  getItems(invoiceId: any){
    this.invoiceService.getAllItems(invoiceId).subscribe(data => {
      this.items = data.result;
    }, error => {
      console.log(error)
    })
  }

  changeQuantity(id, event){
    this.dataSourceDetail.data.filter(value => {
      if(value.id == id){
        value.quantity = event.target.value;
        this.total.set(value.id, value.quantity * value.price);
      }
    })
  }

  setDataDetail(invoiceId){
    this.total.clear();
    this.invoiceService.getAllItems(invoiceId).subscribe(data => {
      this.dataSourceDetail.data = data.result;
      data.result.filter(value => {
        this.listProductId.push(value.productId);
      })
    }, error => {
      console.log(error)
    })
    this.detail = true;
  }

  updateItems(){
    this.dataSourceDetail.data.filter(value => {
      this.invoiceService.updateItem(value.id,value.quantity).subscribe(data => {

      },error => {
        console.log(error)
      });
    })
  }

  addItem(){
    console.log(this.listProductId);
  }
  // findALlProducts() {
  //   this.invoiceService.findAllProduct().subscribe(data => {
  //     this.dataSource.data = data.result;
  //     this.items = data.result;
  //     this.items.filter(value => {value.quantity = 0})
  //   })
  // }
  //
  // changeQuantity(id, event){
  //   const quantity = event.target.value;
  //   this.items.filter(value => {value.productId == id ? value.quantity = quantity: 0})
  // }
  openDialog(invoiceId){
    this.invoiceService.getAllItems(invoiceId).subscribe(data => {
      const dialogRef = this.dialog.open(DialogProduct,{
        width: '1000px',
        data: data.result
      });
      dialogRef.afterClosed().subscribe(result => {
        this.findInvoiceByCustomerId(this.customerId)
      });
      this.items = data.result;
    }, error => {
      console.log(error)
    });

  }
}


@Component({
  selector: 'dialog-product',
  templateUrl: './Dialog-product.html'
})
export class DialogProduct implements OnInit{
  cols = ['name','price', 'vat', 'quantity', 'total'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  items;

  total = new Map<any,any>();
  constructor(
      private dialogRef: MatDialogRef<DialogProduct>,
      private invoiceService: InvoiceService,
      @Inject(MAT_DIALOG_DATA) public data
  ) {

  }

  ngOnInit(): void {
    if(this.data != null){
      this.dataSource.data = this.data;
      this.dataSource.data.filter(value => {
        this.total.set(value.id,value.total);
      })
    }
  }

  changeQuantity(id, event){
    this.dataSource.data.filter(value => {
      if(value.id == id){
        value.quantity = event.target.value;
        this.total.set(value.id, value.quantity * value.price);
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(){
    this.dataSource.data.filter(value => {
      this.invoiceService.updateItem(value.id,value.quantity).subscribe(data => {

      },error => {
        console.log(error)
      });
    })
  }
}
