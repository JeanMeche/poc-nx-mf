import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard';
  http = inject(HttpClient);

  constructor() {
    this.http.get('https://dummyjson.com/products/1').subscribe();
  }
}
