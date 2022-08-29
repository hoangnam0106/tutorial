import { Component, OnInit } from '@angular/core';
import { CallBotService } from '../../call-bot.service';
import { ActivatedRoute } from '@angular/router';
import {AfterViewInit, ChangeDetectorRef, Injector, OnDestroy, ViewChild} from "@angular/core";
import {MatTableDataSource} from "@angular/material/table";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-detail-call-bot',
  templateUrl: './detail-call-bot.component.html',
  styleUrls: ['./detail-call-bot.component.scss']
})
export class DetailCallBotComponent implements OnInit, AfterViewInit {
  
  constructor(
    private callBotService:CallBotService,
    private route: ActivatedRoute,
    private datepipe: DatePipe) { 
    
  }
  info;
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getinfoCustomer(id);
  }
  getinfoCustomer(id){
    this.callBotService.get(id).subscribe(data => {
      this.info = data.result;
    }, error => {
      console.log(error);
    })
  }
  ngAfterViewInit(): void {

  }
  createRange(obj){

    return  Object.entries(obj);
  }

  formatDateTime(s: any): any{
    return this.datepipe.transform(new Date(s), 'dd/MM/yyyy')
}
}
