import {Component, OnInit} from '@angular/core';

import { ConcreteClass1, ConcreteClass2 } from './templatemethod';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
    const c1: ConcreteClass1 = new ConcreteClass1();
    const c2: ConcreteClass2 = new ConcreteClass2();

    c1.templateMethod();
    c2.templateMethod();

  }
  
  invoke(): void {}
  ngOnInit() {}
}

