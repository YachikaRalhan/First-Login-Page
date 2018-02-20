import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-page2',
  template: `
   <app-mybuttons></app-mybuttons>
    
    <h2>Student-list</h2>
    <table *ngFor="let x of data" style="width:10%">
    <td>{{x.Id  }}</td>
    <td>{{x.Name}}</td>
    <td>{{x.Age }}</td>
    </table>

  `,
  styles: [

    `table, td {
      border: 1px solid black;
               }`

  ]
})
export class Page2Component implements OnInit {

  constructor(private _studentService : StudentService) { }
  public data=[];

  ngOnInit() {
    this.data=this._studentService.getdata();
  }
  

}
