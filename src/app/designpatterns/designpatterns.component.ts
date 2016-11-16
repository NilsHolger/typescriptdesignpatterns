import {Component, OnInit} from '@angular/core';

import { ConcreteSubject, ConcreteObserver } from './observer';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
      const sub: ConcreteSubject = new ConcreteSubject();
      sub.register(new ConcreteObserver(sub, "flash"));
      sub.register(new ConcreteObserver(sub, "wonderwoman"));
      sub.register(new ConcreteObserver(sub, "spiderman"));

      sub.SubjectState = 100;
      sub.notify();
  }
  
  invoke(): void {}
  ngOnInit() {}
}

