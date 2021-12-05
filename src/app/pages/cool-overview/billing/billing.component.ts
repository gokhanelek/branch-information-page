import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from 'src/app/core/models/billing';
import { BillingService } from 'src/app/core/services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  billing$ = new Observable<Billing[]>();
  displayedColumns: string[] = ['Service', 'Type', 'Date', 'Amount'];

  constructor(private billingService: BillingService) {
    this.billing$ = this.billingService.getBillings()
  }
}
