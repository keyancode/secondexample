import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {

  @ViewChild('plcHolder', {read: ViewContainerRef}) vref: ViewContainerRef;
  @Input() compToAdd: any;
  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
    
    this.service.setViweRef(this.vref);
    this.service.addComponent(this.compToAdd);
  }

}
