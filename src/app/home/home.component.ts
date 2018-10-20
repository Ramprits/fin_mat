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
  message = '';
  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.message = 'Please wait while loading...';
      this.quoteService
        .getLoans()
        .pipe(
          finalize(() => {
            this.message = 'Still loading...';
            this.isLoading = false;
          })
        )
        .subscribe((quote: any[]) => {
          this.quote = quote;
        });
    }, 2000);
  }
}
