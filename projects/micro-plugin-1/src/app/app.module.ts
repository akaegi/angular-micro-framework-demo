import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DummyComponent} from "./dummy/dummy.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DummyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
