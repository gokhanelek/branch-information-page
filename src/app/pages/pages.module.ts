import { NgModule } from '@angular/core';
import { MainNavComponent } from '../layouts/main-nav/main-nav.component';
import { SharedModule } from '../shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';


import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    MainNavComponent,
    PagesComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ]
})
export class PagesModule { }
