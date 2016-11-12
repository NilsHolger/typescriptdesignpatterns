import { Component } from '@angular/core';
//import { Singleton } from './singleton';
//import { AbstractFactory } from './abstractfactory';
//import { FactoryMethod } from './factorymethod';
//import { Builder } from './builder';
import { Prototype } from './prototype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: string = "";
  constructor(private prototype: Prototype){
      for (let i = 0; i < 4; i++){
          this.result += this.prototype.createOne("c" + i).toString() + " ";
        }
  } 
}

