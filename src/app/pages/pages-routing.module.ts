import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'overview',
    component: PagesComponent,
    data: {
      title: 'Overview',
      explanation: 'Get summary of your recent usage & insights'
    },
    loadChildren: () => import('../pages/cool-overview/cool-overview.module').then(m => m.CoolOverviewModule)
  },
  {
    path: 'locations',
    data: {
      title: 'Locations',
      explanation: 'Overview of your locations, licences and products'
    },
    component: PagesComponent,
    loadChildren: () => import('../pages/cool-locations/cool-locations.module').then(m => m.CoolLocationsModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
