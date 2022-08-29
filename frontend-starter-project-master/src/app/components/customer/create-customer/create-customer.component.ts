import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../customer.service";
import {data} from "autoprefixer";
import {FuseConfirmationService} from "../../../../@fuse/services/confirmation";
import {MatDialogRef} from "@angular/material/dialog";
import {FuseConfirmationDialogComponent} from "../../../../@fuse/services/confirmation/dialog/dialog.component";
import {BasicResponse} from "../../../shared/basic-response";
import {clone, result} from "lodash-es";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  createCustomerForm: FormGroup = new FormGroup({});
  successResponse: any;
  errorResponse: any;
  constructor(private fb: FormBuilder,
              private customerService: CustomerService,
              private _fuseConfirmationService: FuseConfirmationService) {
    this.createCustomerForm = this.fb.group({
      firstName: this.fb.control(undefined),
      lastName: this.fb.control(undefined),
      street: this.fb.control(undefined),
      city: this.fb.control(undefined),
      postalCode: this.fb.control(undefined),
      idNo: this.fb.control(undefined)
    });
  }

  ngOnInit(): void {
    this.createCustomerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      idNo: ['', Validators.required],
    })
  }

  createCustomer(){
    const diaglogRef: MatDialogRef<FuseConfirmationDialogComponent> = this.showConfirmDialog();
    diaglogRef.afterClosed().subscribe(
        (_result) => {
          if(_result == "confirmed"){
            this.customerService.create(this.createCustomerForm.value).subscribe(data =>{
              if(data.success == true){
                this.showSuccessDialog(data);
              }else{
                this.showErrorDialog(data.message)
              }
            })
          }
        }
    )
  }

  private showConfirmDialog(): MatDialogRef<FuseConfirmationDialogComponent> {
    return this._fuseConfirmationService.open({
      'title': 'Create partner with below info?',
      'message': '<br/><pre>' + JSON.stringify(this.createCustomerForm.value, null, 2) + '</pre>',
      'icon': {
        'show': true,
        'name': 'mat_outline:business',
        'color': 'primary'
      },
      'actions': {
        'confirm': {
          'show': true,
          'label': 'Confirm',
          'color': 'primary'
        },
        'cancel': {
          'show': true,
          'label': 'Cancel'
        }
      },
      'dismissible': true
    });
  }

  private showSuccessDialog(response: BasicResponse): void {
    console.log(JSON.stringify(response));
    this.successResponse = clone(response);
    this.createCustomerForm.reset();
    this._fuseConfirmationService.open(
        {
          'title': 'Create customer success',
          'message': '<br/><pre>'+JSON.stringify( this.successResponse.result,null,2)+'</pre>',
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

  private showErrorDialog(error: any): void {
    console.error(error);
    this.errorResponse = clone(error);
    this._fuseConfirmationService.open(
        {
          'title': 'Create customer error',
          'message': '<br/><pre>'+JSON.stringify(this.errorResponse.error,null,2)+'</pre>',
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
