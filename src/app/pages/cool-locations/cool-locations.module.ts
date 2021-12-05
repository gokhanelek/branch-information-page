import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { CoolLocationsRoutingModule } from './cool-locations-routing.module';
import { CoolLocationsComponent } from './cool-locations.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationCreateComponent } from './location-create/location-create.component';



@NgModule({
  declarations: [
    CoolLocationsComponent, 
    LocationsListComponent, 
    LocationCreateComponent],
  imports: [
    CoolLocationsRoutingModule,
    SharedModule
  ]
})
export class CoolLocationsModule { }
