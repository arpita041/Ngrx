import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPosts } from 'src/state/post.selectors';
import { Post } from '../model/post.model';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any=[];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.post=this.store.select(getPosts).subscribe((posts)=>
    {
      this.post = posts;
      console.log(this.post);

    })

  }

}
