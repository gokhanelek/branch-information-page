import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationResponse } from 'src/app/core/models/locations';
import { LocationsService } from 'src/app/core/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  locations$ = new Observable<LocationResponse[]>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private locationsService: LocationsService
  ) {
    this.locations$ = this.locationsService.getLocations().pipe(map((res) => res.slice(0, 3)));
    this.matIconRegistry.addSvgIcon(
      "plus-circle",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/locations/plus-circle-icon.svg")
    );
  }

}
