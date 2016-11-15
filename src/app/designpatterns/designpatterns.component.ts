import { Component, OnInit } from '@angular/core';

import { Handler, ConcreteHandler1, ConcreteHandler2, ConcreteHandler3 } from './chainofresponsibility';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {
  private h1: Handler;
  private h2: Handler;
  private h3: Handler;
  private reqs: Array<number> = [ 2, 7, 23, 34, 4, 5, 8, 3];
  private i: number;
  private max: number = this.reqs.length;


  constructor() {
    this.h1 = new ConcreteHandler1(3);
    this.h2 = new ConcreteHandler2(7);
    this.h3 = new ConcreteHandler3(20);
    this.invoke();
   }

  invoke() : void {
    this.h1.setHandler(this.h2);
    this.h2.setHandler(this.h3);
    for (this.i = 0; this.i < this.max; this.i += 1 ){
            this.h1.operation("operation is fired ... ", this.reqs[this.i]);
    }
  }
  ngOnInit() {
  }

}
