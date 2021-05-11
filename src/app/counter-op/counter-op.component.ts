import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterState } from 'src/state/counter.state';
import { getCounter } from 'src/state/couter.selector';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-counter-op',
  templateUrl: './counter-op.component.html',
  styleUrls: ['./counter-op.component.css']
})
export class CounterOpComponent implements OnInit {
counter : any;
name: string ="";
data:any;
c: any;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  // this.store.select('counter').subscribe((data) =>
  // {
  //   this.counter = data.counter;
  //   this.name = data.name;
  // })
  this.c = this.store.select('counter');
  console.log("the value of c"+this.c);
  this.data = this.store.select(getCounter).subscribe((counter)=>
  {
    this.counter = counter;
  })
  }

}
