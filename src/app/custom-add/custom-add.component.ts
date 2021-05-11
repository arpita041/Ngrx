import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/state/counter.actions';
import { counterState } from 'src/state/counter.state';

@Component({
  selector: 'app-custom-add',
  templateUrl: './custom-add.component.html',
  styleUrls: ['./custom-add.component.css']
})
export class CustomAddComponent implements OnInit {

  value:number=0;
  constructor( private store : Store<{counter: counterState}>) { }

  ngOnInit(): void {
  }

  onAdd()
  {
    this.store.dispatch(customIncrement({ value : +this.value})); // + will just make it a number if u r using only this.value
    // it will just act like a string
  console.log(this.value);
  }
}
