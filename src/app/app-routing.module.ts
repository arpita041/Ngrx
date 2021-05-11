import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterOpComponent } from './counter-op/counter-op.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path : 'counter' , component: CounterOpComponent},
  {path:'posts' , component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
