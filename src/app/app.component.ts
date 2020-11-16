import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [{
    name:'Уборка',
    done:true,
  },{name:'Покупка продуктов',
  done:true,
  },{
    name:'Поездка к врачу',
    done:false,
  },{name:'Приготовление ужина',
  done:true,
  },{
    name:'Организовать вечеринку',
    done:true,
  }]
}
