import { Component, OnInit } from '@angular/core';
import { DonationRequest } from '../donation-request';

@Component({
  selector: 'app-donar-request',
  templateUrl: './donar-request.component.html',
  styleUrls: ['./donar-request.component.css']
})
export class DonarRequestComponent implements OnInit {
  reqList: DonationRequest[];
  bgGrp: any;
  constructor(){ 
    this.bgGrp = 590.00;
    this.reqList = [
      
      {'bloodGroup': 'opos', 'requiredDate': '2018-08-20', 'handlingCharges': 890.245},
      {'bloodGroup': 'bpos', 'requiredDate': '2018-08-20', 'handlingCharges': 590.000},
      {'bloodGroup': 'bpos', 'requiredDate': '2018-08-20', 'handlingCharges': 790.245}

    ];
  }

  ngOnInit() {
  }

}
