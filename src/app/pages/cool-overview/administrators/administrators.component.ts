import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Administrator } from 'src/app/core/models/administrators';
import { AdministratorsService } from 'src/app/core/services/administrators.service';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent {
  administrators$ = new Observable<Administrator[]>();
  inviteEmail = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
  });

  constructor(
    private administratorsService: AdministratorsService,
  ) {
    this.administrators$ = this.administratorsService.getAdministrators();
  }

  sendInvite() {
    if (this.inviteEmail.get('email')?.invalid) {
      alert('Check your e-mail address!');
      return;
    }
  }
}
