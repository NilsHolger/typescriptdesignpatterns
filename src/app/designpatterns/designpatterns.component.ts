import {Component, OnInit} from '@angular/core';

import { Context, ConcreteStateA } from './state';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
      const context: Context = new Context(new ConcreteStateA());
      context.request();
      context.request();
      context.request();
      context.request();
      context.request();
      context.request();
      context.request();
      context.request();
  }
  
  invoke(): void {}
  ngOnInit() {}
}

