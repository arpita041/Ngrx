import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/state/counter.actions';
import { counterState } from 'src/state/counter.state';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  // constructor( private store : Store<{counter :{ counter :number}}>) {}
  constructor( private store : Store<AppState>) { }
  ngOnInit(): void {
  }

  onIncrement()
  {
    this.store.dispatch(increment());
  }
  onDecrement()
  {
    this.store.dispatch(decrement());
  }
  onReset()
  {
    this.store.dispatch(reset());
  }
}
