import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './login/auth.service';
import { ViewDataComponent } from './view-data/view-data.component';
import { SurgeriesComponent } from './surgeries/surgeries.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    ViewDataComponent,
    SurgeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
