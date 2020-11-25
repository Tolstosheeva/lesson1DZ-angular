import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [{
    name:'Уборка',
    
  },{name:'Покупка продуктов',
 
  },{
    name:'Поездка к врачу',
    
  },{name:'Приготовление ужина',
  
  },{
    name:'Организовать вечеринку',
    
  }]
  tasks = [{
   isDone: true,
  }]
  addTask() {
    this.list.push({
      name:'организовать вечеринку'
      
      
    })
  }
}
