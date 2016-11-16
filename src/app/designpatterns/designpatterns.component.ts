import {Component, OnInit} from '@angular/core';

import { State, Originator, CareTaker } from './memento';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor(){
    const state: State = new State("... state");
    const originator: Originator = new Originator(state);
    const careTaker: CareTaker = new CareTaker();

    careTaker.Memento = originator.createMemento();
    originator.State = new State("something else ...");

    originator.setMemento(careTaker.Memento);

  }
  
  invoke(): void {}
  ngOnInit() {}
}

