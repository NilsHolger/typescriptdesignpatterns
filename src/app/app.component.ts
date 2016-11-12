import { Component } from '@angular/core';
import { Singleton } from './singleton';
//import { AbstractFactory } from './abstractfactory';
import { FactoryMethod } from './factorymethod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private singleton : Singleton, private factoryMethod: FactoryMethod){
     //console.log(this.singleton.show());
  } 
  result = this.factoryMethod.show("A");
}

