import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Card } from 'src/app/core/models/card';
import { CardService } from 'src/app/core/services/card.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  card$ = new Observable<Card>();
  exprenseLimitValue$ = new Observable<number>();

  constructor(private cardService: CardService) {
    this.card$ = this.cardService.getCards();
    this.exprenseLimitValue$ = this.cardService.getCards().pipe(
      map(res => {
        return Math.floor((res.expense.current * 100) / res.expense.limit);
      })
    )
  }

}
