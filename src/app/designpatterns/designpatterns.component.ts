import {Component, OnInit} from '@angular/core';

import { ConcreteMediator, ConcreteColleagueA, ConcreteColleagueB } from './mediator';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
    const cm: ConcreteMediator = new ConcreteMediator();
    const c1: ConcreteColleagueA = new ConcreteColleagueA(cm);
    const c2: ConcreteColleagueB = new ConcreteColleagueB(cm);

    cm.concreteColleagueA = c1;
    cm.concreteColleagueB = c2;

    c1.send("send of concretecolleagueA is being invoked");
    c2.send("send of concretecolleagueB is being invoked");

  }
  
  invoke(): void {}
  ngOnInit() {}
}

