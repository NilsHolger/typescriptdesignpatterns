import {Component, OnInit} from '@angular/core';

import { ConcreteIterator, Numbers } from './iterator';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {
  private fibArray: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  constructor() {
  let numbers: Numbers = new Numbers(this.fibArray);
  let it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();
  while(it.hasNext()){
    console.log(it.next());
  }
  }
  invoke(): void {}
  ngOnInit() {}
}
