import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page2Component} from './page2/page2.component';
import{ LoginComponent } from './login/login.component';
import{ PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AddstudentComponent} from './addstudent/addstudent.component';
const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'page2',component:Page2Component},
  {path:'login',component:LoginComponent},
  {path:"addstudent",component:AddstudentComponent},
  {path:"**",component:PageNotFoundComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[Page2Component,LoginComponent,PageNotFoundComponent,AddstudentComponent]
