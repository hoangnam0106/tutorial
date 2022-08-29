import { Component,Input, OnInit,SimpleChanges } from '@angular/core';
import { CallCenterService } from 'app/core/service/support/callcenter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-call-center',
  templateUrl: './detail-call-center.component.html',
  styleUrls: ['./detail-call-center.component.scss']
})
export class DetailCallCenterComponent implements OnInit {
  info;
  createReason ={};
  direction= {};
  @Input() idDetail;
  priority = {};
  status = {};
  constructor(private callCenterService: CallCenterService,private route: ActivatedRoute) { 
    
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.idDetail){
      this.callCenterService.detail(this.idDetail).subscribe((res: any) => {
        if (res) {
          this.info = res;
        }else{
        }
      },(error:any)=>{
        // this.dataSource = null;
      });
    }
  }
  ngOnInit(): void {
    console.log(this.idDetail);
    this.createReason[5] = "Live Chat";
    this.createReason[6] = "Voice mail";
    this.createReason[9] = "Facebook comment";
    this.createReason[10] = "Facebook messenger";
    this.createReason[12] = "Zalo";
    this.createReason[13] = "Email";
    this.direction[0] = "Call Out";
    this.direction[1] = "Call In";
    this.direction[2] = "Internal";
    this.priority[4] = "Độ ưu tiên khẩn cấp";
    this.priority[3] = "Độ ưu tiên cao";
    this.priority[2] = "Độ ưu tiên bình thường";
    this.priority[1] = "Độ ưu tiên thấp";
    this.status[0] = "Mới";
    this.status[3] = "Đóng";
    const id = this.route.snapshot.paramMap.get('id');
    this.callCenterService.detail(this.idDetail ? this.idDetail : id).subscribe((res: any) => {
      if (res) {
        this.info = res;
      }else{
      }
    },(error:any)=>{
      // this.dataSource = null;
    });
  }
  formatDateFromTimeStamp(date){
    let dateString = new Date(date*1000);
    return ("0" + dateString.getHours()).slice(-2) + ":" + ("0" + dateString.getMinutes()).slice(-2) + " | " +
    ("0" + dateString.getDate()).slice(-2) + "-" + ("0"+(dateString.getMonth()+1)).slice(-2) + "-" +
    dateString.getFullYear() ;
}

}
