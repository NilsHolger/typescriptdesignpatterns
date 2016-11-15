import { Component, OnInit } from '@angular/core';

import { FlyweightFactory, ConcreteFlyWeight } from './flyweight';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {
  conq100: ConcreteFlyWeight;
  conq200: ConcreteFlyWeight;
  constructor() {
    this.invoke();
   }

  invoke() : void {
    const factory: FlyweightFactory = new FlyweightFactory();

    this.conq100 = <ConcreteFlyWeight>factory.getFlyweight("conq100");
    this.conq200 = <ConcreteFlyWeight>factory.getFlyweight("conq200");

    this.conq100.operation("100");
    this.conq200.operation("200");

}
  ngOnInit() {
  }

}
