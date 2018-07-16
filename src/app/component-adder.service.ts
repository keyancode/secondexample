import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BloodDonarsComponent } from './blood-donars/blood-donars.component';
import { CorpDonarsComponent } from './corp-donars/corp-donars.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;

  constructor(private factResolver: ComponentFactoryResolver) { }

  setViweRef(viewRef: ViewContainerRef) {
    this.viewRef = viewRef ;
  }

  addComponent(compToAddd) {
  const factory = this.factResolver.resolveComponentFactory(compToAddd);
  const component =  factory.create(this.viewRef.parentInjector);
  if(component.componentType === BloodDonarsComponent){
    (<BloodDonarsComponent>component.instance).list = ['Name1','Name2'];
  }
  else{
    (<CorpDonarsComponent>component.instance).list = ['Name3','Name4'];
  }
  
  this.viewRef.insert(component.hostView);
  }
}
