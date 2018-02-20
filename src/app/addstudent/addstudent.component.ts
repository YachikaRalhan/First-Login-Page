import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  template: `
  <app-mybuttons></app-mybuttons>

  <h5>Id:<input [(ngModel)]="id" type="number" min=1></h5>
  
  <h5>Name:<input [(ngModel)]="name" type="text"></h5>

  <h5>Age:<input [(ngModel)]="age" type="number" min=10></h5>

  <button (click)="func2()">click me</button>
  
  `,
  styles: []
})
export class AddstudentComponent implements OnInit {
    public id;
    public name="";
    public age;
  constructor(private _studentService : StudentService) { }

  ngOnInit() {
  }
  func2()
  {   const student=
    {
    "Id":this.id,
    "Name":this.name,
    "Age":this.age
  
  }
  console.log(student.Id);
  this._studentService.student.push(student);
}



}
