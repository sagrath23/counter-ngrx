import { Component } from '@angular/core';

import { CounterComponent } from './Counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter-ngrx';
}
