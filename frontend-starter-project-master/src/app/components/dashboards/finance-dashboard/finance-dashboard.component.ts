import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer/customer';
import { CustomerService } from '../../customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.scss']
})
export class FinanceDashboardComponent implements OnInit {


  customers : Customer[];

  message = "";
  
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';

    
  }



  // getCustomers():void{
  //   this.customerService.getCustomers().subscribe(
  //     data => {
  //       this.customers = data;
  //     }
  //   )
  // }

}
