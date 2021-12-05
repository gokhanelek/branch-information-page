import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoolOverviewComponent } from './cool-overview.component';


const routes: Routes = [
  {
    path: '',
    component: CoolOverviewComponent,
    data: {
      title: 'Overview'
    }
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CoolOverviewRoutingModule { }