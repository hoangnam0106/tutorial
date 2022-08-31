import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InvoiceService} from "../invoice.service";

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss']
})
export class CreateInvoiceComponent implements OnInit {

  createInvoiceForm: FormGroup = new FormGroup({});
  quantity = 0;
  constructor(private invoiceService: InvoiceService,
              private fb: FormBuilder) {
    this.createInvoiceForm = fb.group({

    })
  }

  ngOnInit(): void {
  }

  plus(){
    this.quantity = this.quantity + 1
  }

  minus(){
    if(this.quantity > 0){
      this.quantity = this.quantity - 1
    }
  }
}
