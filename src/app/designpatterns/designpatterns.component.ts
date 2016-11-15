import { Component, OnInit } from '@angular/core';

import { Proxy } from './proxy';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {
  private proxy1000: Proxy = new Proxy("1000");
  private proxy1001: Proxy = new Proxy("1001");

  constructor() {
    this.invoke();
   }

  invoke() : void {
    this.proxy1000.doTask();
    this.proxy1000.doTask();
    this.proxy1001.doTask();
    this.proxy1001.doTask();
    this.proxy1000.doTask();

}
  ngOnInit() {
  }

}
