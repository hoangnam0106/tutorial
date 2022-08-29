import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FuseConfirmationDialogComponent } from '@fuse/services/confirmation/dialog/dialog.component';
import { BasicResponse } from 'app/shared/basic-response';
import { clone } from 'lodash';
import { CallBotService } from '../call-bot.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-create-callbot',
  templateUrl: './create-callbot.component.html',
  styleUrls: ['./create-callbot.component.scss']
})
export class CreateCallbotComponent implements OnInit {
  createConditionForm: FormGroup = new FormGroup({})
  successResponse: any = undefined;
  errorResponse: any = undefined;

  constructor(private fb: FormBuilder,
              private callBotService: CallBotService,
              private _fuseConfirmationService: FuseConfirmationService
    ) { 
    this.createConditionForm = fb.group({
      status: this.fb.control(undefined),
      customerPhone: this.fb.control(undefined),
      callAt: this.fb.control(undefined),
      pickupAt: this.fb.control(undefined)
    })
  }

  ngOnInit(): void {
    this.createConditionForm = this.fb.group(
      {
        customerPhone: ['', [Validators.required, Validators.pattern('[1-9]+([0-9])*')]],
        callAt: ['', Validators.required],
        status: ['', Validators.required],
        pickupAt: ['', Validators.required]
      }
    )
  }

  create(): void {
    const dialogRef: MatDialogRef<FuseConfirmationDialogComponent> = this.showConfirmDialog();
    if(this.createConditionForm.value.customerPhone){
        this.createConditionForm.value.customerPhone = "+95" + this.createConditionForm.value.customerPhone;
    }

    dialogRef.afterClosed().subscribe(
      (result) => {if(result === 'confirmed'){
        this.callBotService.create(this.createConditionForm.value).subscribe(
          (response) => this.showSuccessDialog(response)
        ), (error) => this.showErrorDialog(error)
      }}
    )
  }


  private showConfirmDialog(): MatDialogRef<FuseConfirmationDialogComponent> {
    return this._fuseConfirmationService.open({
      'title': 'Create customer with below info?',
      'message': '<br/><pre>' + JSON.stringify(this.createConditionForm.value, null, 2) + '</pre>',
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
      this.successResponse = clone(response);
      this.createConditionForm.reset();
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
