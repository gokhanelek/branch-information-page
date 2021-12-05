import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usage } from 'src/app/core/models/usage';
import { UsageService } from 'src/app/core/services/usage.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsageComponent {
  usage$ = new Observable<Usage>();
  limit: number = 100000;

  constructor(private usageService: UsageService) {
    this.usage$ = this.usageService.getUsage().pipe(map((res) => {
      return {
        'exams': Math.floor((res.exams * 100) / this.limit),
        'monitoring': Math.floor((res.monitoring * 100) / this.limit),
        'applicationLibrary': Math.floor((res.applicationLibrary * 100) / this.limit)
      }
    }));
  }

}
