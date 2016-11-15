import {Component, OnInit} from '@angular/core';

import {ConcreteTechnology, Context, WorkingSoftwareTechnology} from './interpreter';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {
  constructor() {
    let context: Context = new Context();
    let list = [];
    list.push(new ConcreteTechnology());
    list.push(new ConcreteTechnology());
    list.push(new ConcreteTechnology());
    list.push(new WorkingSoftwareTechnology());
    list.push(new ConcreteTechnology());
    list.push(new ConcreteTechnology());
    list.push(new WorkingSoftwareTechnology());
    list.push(new WorkingSoftwareTechnology());
    for (let i = 0; i < list.length; i += 1) {
      list[i].interpret(context);
    }
  }
  invoke(): void {}
  ngOnInit() {}
}
