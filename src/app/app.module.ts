import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './form-login/form-login.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
