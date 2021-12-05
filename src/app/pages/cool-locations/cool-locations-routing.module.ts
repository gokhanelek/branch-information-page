import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolLocationsComponent } from './cool-locations.component';
import { LocationCreateComponent } from './location-create/location-create.component';


const routes: Routes = [
  {
    path: '',
    component: CoolLocationsComponent,
  },
  {
    path: 'create',
    component: LocationCreateComponent
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoolLocationsRoutingModule { }