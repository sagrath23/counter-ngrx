import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CounterReducer } from './Counter/counter.reducer';

import { AppComponent } from './app.component';
import { CounterComponent } from './Counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: CounterReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
