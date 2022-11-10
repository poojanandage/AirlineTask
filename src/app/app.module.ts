import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirLinePassDashboardComponent } from './shared/component/air-line-pass-dashboard/air-line-pass-dashboard.component';
import { TotalCheckedInComponent } from './shared/component/air-line-pass-dashboard/total-checked-in/total-checked-in.component';
import { PassengerListComponent } from './shared/component/air-line-pass-dashboard/passenger-list/passenger-list.component';
import { PassengerCardComponent } from './shared/component/air-line-pass-dashboard/passenger-list/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AirLinePassDashboardComponent,
    TotalCheckedInComponent,
    PassengerListComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
