import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [{
    name:'Уборка',
    isDone: true,
  },{name:'Покупка продуктов',
  isDone: false,
  },{
    name:'Поездка к врачу',
    isDone: true,
  },{name:'Приготовление ужина',
  isDone: true,
  },{
    name:'Организовать вечеринку',
    isDone: false,
  }]
  tasks = [{
   isDone: true,
  }]
  addTask() {
    this.list.push({
      name:'организовать вечеринку',
      isDone: true,
      
    })
  }
}
