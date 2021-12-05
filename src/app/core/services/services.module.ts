import { NgModule } from '@angular/core';
import { AdministratorsService } from './administrators.service';
import { BillingService } from './billing.service';
import { CardService } from './card.service';
import { LocationsService } from './locations.service';
import { UsageService } from './usage.service';


@NgModule({
    providers: [
        CardService,
        BillingService,
        LocationsService,
        UsageService,
        AdministratorsService
    ],
})
export class ServicesModule { }
