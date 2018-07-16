import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DonationTipsComponent } from './donation-tips/donation-tips.component';
import { DonarRequestComponent } from './donar-request/donar-request.component';
import { BloodDonarsComponent } from './blood-donars/blood-donars.component';
import { CorpDonarsComponent } from './corp-donars/corp-donars.component';
import { FilterPipe } from './filter.pipe';
import { AdderComponent } from './adder/adder.component';
import { ShawdowDirective } from './shawdow.directive';

@NgModule({
  declarations: [
    AppComponent,
    DonationTipsComponent,
    DonarRequestComponent,
    BloodDonarsComponent,
    CorpDonarsComponent,
    FilterPipe,
    AdderComponent,
    ShawdowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BloodDonarsComponent,CorpDonarsComponent]
})
export class AppModule { }
