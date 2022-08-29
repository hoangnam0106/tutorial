import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Partner} from '../partner';
import {PartnerDetail} from '../partner-detail';
import {PartnerService} from '../partner.service';
import {clone} from 'lodash-es';
import {FuseAlertService} from '../../../../@fuse/components/alert';
import {fuseAnimations} from '../../../../@fuse/animations';
import {FuseConfirmationService} from '../../../../@fuse/services/confirmation';
import {BasicResponse} from '../../../shared/basic-response';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FuseConfirmationDialogComponent} from '../../../../@fuse/services/confirmation/dialog/dialog.component';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.scss'],
  animations: fuseAnimations
})
export class CreatePartnerComponent implements OnInit {
  createPartnerForm: FormGroup;

  partner: Partner;
  partnerDetail: PartnerDetail;
  categories: any[] = [
    {value:'telecom', name:'Telecom'},
    {value:'banking', name:'Banking'},
    {value: 'e-wallet', name: 'E-wallet'},
    {value:'others', name:'Others'}];

  successResponse: any = undefined;
  errorResponse: any = undefined;

  constructor(private _fb: FormBuilder,
              private _partnerService: PartnerService,
              private _fuseConfirmationService: FuseConfirmationService) {
  }

  ngOnInit(): void {
    this.createPartnerForm = this._fb.group({
      name: ['', [Validators.required]],
      description:['', [Validators.required]],
      businessRegistrationNo: ['', [Validators.required]],
      businessType: ['', [Validators.required]],
      address: ['', [Validators.required]],
      primaryPhone: ['', [Validators.required, Validators.pattern('[1-9]+([0-9])*')]],
      secondaryPhone: ['', [Validators.pattern('[1-9]+([0-9])*')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    return;
  }

  resetForm(): void {
    console.log('reset form');
    this.createPartnerForm.reset();
  }

  createPartner(): void {
    if (this.createPartnerForm.value.primaryPhone) {
      this.createPartnerForm.value.primaryPhone = '+95'+this.createPartnerForm.value.primaryPhone;
    }
    if (this.createPartnerForm.value.secondaryPhone) {
      this.createPartnerForm.value.secondaryPhone = '+95'+this.createPartnerForm.value.secondaryPhone;
    }
    const dialogRef: MatDialogRef<FuseConfirmationDialogComponent> = this.showConfirmDialog();
    dialogRef.afterClosed().subscribe(
        (result) => {if (result==='confirmed') {
          this._partnerService.createPartner(this.createPartnerForm.value).subscribe(
              (response) => {
                this.showSuccessDialog(response);
              },
              (error) => {
                this.showErrorDialog(error);
              }
          );
        }}
    );
  }

  private showConfirmDialog(): MatDialogRef<FuseConfirmationDialogComponent> {
    return this._fuseConfirmationService.open({
      'title': 'Create partner with below info?',
      'message': '<br/><pre>' + JSON.stringify(this.createPartnerForm.value, null, 2) + '</pre>',
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
      this.createPartnerForm.reset();
      this._fuseConfirmationService.open(
          {
            'title': 'Create partner success',
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
          'title': 'Create partner error',
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
