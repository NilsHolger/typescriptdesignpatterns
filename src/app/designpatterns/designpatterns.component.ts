import {Component, OnInit} from '@angular/core';

import { Context, ConcreteStrategy1, ConcreteStrategy2, ConcreteStrategy3 } from './strategy';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
      let context: Context = new Context(new ConcreteStrategy1());
      context.executeStrategy();
      context = new Context(new ConcreteStrategy2());
      context.executeStrategy();
      context = new Context(new ConcreteStrategy3());
      context.executeStrategy();
  }
  
  invoke(): void {}
  ngOnInit() {}
}

