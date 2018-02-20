import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template:`
  <h2>Id:<input #myinput type="text"></h2>

  <h2>Password:<input #mypassword type="password"></h2>

  <button (click)="myfunc(myinput.value,mypassword.value)">Login</button>
`,
  styles: []
})
export class LoginComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  myfunc(value1,value2)
  {
    if(value1==value2)
    {
      this.router.navigate(['/page2']);
    console.log(value1,value2);
  }

  }
}

