import { Component } from '@angular/core';
enum RoleBlog{
  Admin =9,
  Editor=2,
  Viever=1
}

type User = {
name:string,
age: number
phone?: string,
role:RoleBlog
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text: string;
  age = 25;

  counterText: any;

  level: number | string;
  arrNumber: number[]=[3,5,20];
  array:[number,string] = [10,'ten'];

  _name: string;

  set name(value){
    if(value.length > 5){
     this._name =value.slice(0, 5);
    } else{
      this._name = value;
    }
  }
  get name(){
    return this._name;
  }

  /*user1: User = {
    name:'Bob',
    age: 34,
    phone: '123212251'
  }
  user2: User = {
    name:'Alise',
    age: 24
  }*/
users: User[];

  readonly RoleBlog = RoleBlog;

  constructor(){
    this._name ='oleksander';
    console.log(this.name);
    this.text = 'some string';
    this.age = 10;
    this.counterText =20;
    this.counterText ='test';
    this.level = 'strong';

    this.users =[{
      name:'User1',
      age:34,
      role: 9
    },{
      name:'User2',
      age:32,
      role: 1
    }]
    console.log(this.diffDate(new Date(),new Date(2020,9,21)));
    console.log(this.calcPrice(100,30));
  }
  diffDate(date1:Date, date2:Date): number{
    const diff = +date1 - +date2;
    
    
    return +(diff / 1000 / 60 / 60).toFixed(2);

  }
  calcPrice(prise:number, sale:number): number{
    return prise - prise*sale/100;

  }
}
