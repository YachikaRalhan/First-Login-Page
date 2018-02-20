import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mybuttons',
  template: `
  <button (click)="list()">  Students List </button>

  <button (click)="form()">  Add New Student </button>

  <button>  Edit Student </button>
  
  `,
  styles: []
})
export class MybuttonsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  form()
  {
    this.router.navigate(['/addstudent']);
  }
  list()
  {
    this.router.navigate(['/page2']);
  }

}
