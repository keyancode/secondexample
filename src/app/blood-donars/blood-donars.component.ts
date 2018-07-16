import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blood-donars',
  templateUrl: './blood-donars.component.html',
  styleUrls: ['./blood-donars.component.css']
})
export class BloodDonarsComponent implements OnInit {
  list : any[];
  constructor() { }

  ngOnInit() {
  }

}
