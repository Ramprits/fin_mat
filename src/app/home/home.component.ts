import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: any[];
  isLoading: boolean;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getLoans()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: any[]) => {
        this.quote = quote;
      });
  }
}
