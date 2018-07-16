import { Component } from '@angular/core';
import { BloodDonarsComponent } from './blood-donars/blood-donars.component';
import { CorpDonarsComponent } from './corp-donars/corp-donars.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  comp = CorpDonarsComponent;
}
