import { NgModule } from '@angular/core';
import { CoolOverviewRoutingModule } from './cool-overview-routing.module';
import { CoolOverviewComponent } from './cool-overview.component';
import { CardsComponent } from './cards/cards.component';
import { BillingComponent } from './billing/billing.component';
import { LocationsComponent } from './locations/locations.component';
import { UsageComponent } from './usage/usage.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { SharedModule } from 'src/app/shared.module';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    CoolOverviewComponent,
    CardsComponent,
    BillingComponent,
    LocationsComponent,
    UsageComponent,
    AdministratorsComponent,
    SupportComponent,
  ],
  imports: [
    CoolOverviewRoutingModule,
    SharedModule,
  ]
})
export class CoolOverviewModule { }
