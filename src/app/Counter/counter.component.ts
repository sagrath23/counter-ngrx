import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

@Component({
    selector: 'app-counter',
    template: `
    <button (click)="increment()">Increment</button>
	<div>Current Count: {{ counter | async }}</div>
	<button (click)="decrement()">Decrement</button>

	<button (click)="reset()">Reset Counter</button>
    `,
    // Unless a reference changes, ignore change detection on this component.
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
    counter: Observable<number>;

    constructor(private store: Store<number>) {
        this.counter = store.select<number>('counter');
    }

    increment() {
        this.store.dispatch({type: INCREMENT});
    }

    decrement() {
        this.store.dispatch({type: DECREMENT});
    }

    reset() {
        this.store.dispatch({type: RESET});
    }
}
