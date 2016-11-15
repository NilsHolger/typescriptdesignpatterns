import { Component, OnInit } from '@angular/core';

import { Decorator } from './decorator';
import { ConcreteDecorator } from './decorator';
import { ConcreteComponent } from './decorator';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor() {
    this.invoke();
   }

  invoke() : void {
    const decorator100 : Decorator = new ConcreteDecorator(100, new ConcreteComponent("Comp100"));
    decorator100.operation();
}
  ngOnInit() {
  }

}
