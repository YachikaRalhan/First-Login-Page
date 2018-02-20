import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
student=[
  {"Id":1,"Name":"A","Age":10},
  {"Id":2,"Name":"B","Age":12},
  {"Id":3,"Name":"C","Age":12},
  {"Id":4,"Name":"D","Age":15}
];



  constructor() { }
  getdata(){
    return this.student;
   
  

}}
