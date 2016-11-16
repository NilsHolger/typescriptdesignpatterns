import {Component, OnInit} from '@angular/core';

import { Objs, ConcreteElement1, ConcreteElement2, ConcreteVisitor1, ConcreteVisitor2 } from './visitor';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
    let objs: Objs = new Objs();
    objs.attach(new ConcreteElement1());
    objs.attach(new ConcreteElement2());

    let v1: ConcreteVisitor1 = new ConcreteVisitor1();
    let v2: ConcreteVisitor2 = new ConcreteVisitor2();

    objs.operate(v1);
    objs.operate(v2);

  }
  
  invoke(): void {}
  ngOnInit() {}
}

