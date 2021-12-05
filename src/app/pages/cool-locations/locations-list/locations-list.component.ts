import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from 'src/app/core/models/locations';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent {
  displayedColumns: string[] = ['Location', 'Licences', 'Entrollment Date', 'Products'];
  locations$ = new Observable<LocationResponse[]>();

  constructor(private locationService: LocationsService) {
    this.locations$ = this.locationService.getLocations()
  }


}
