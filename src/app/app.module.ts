import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentService} from './student.service';
import { AppRoutingModule, routingcomponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddstudentComponent } from './addstudent/addstudent.component';


import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MybuttonsComponent } from './mybuttons/mybuttons.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingcomponents,
    PageNotFoundComponent,
    AddstudentComponent,
    MybuttonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
