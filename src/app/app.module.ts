import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/state/counter.reducer';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOpComponent } from './counter-op/counter-op.component';
import { CustomAddComponent } from './custom-add/custom-add.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PostComponent } from './post/post.component';
import { AppReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterOpComponent,
    CustomAddComponent,
    HomePageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),   // StoreModule.forRoot({},{})
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
