import { Component, OnInit } from '@angular/core';

import { Receiver, Command, Invoker, ConcreteCommand1, ConcreteCommand2 } from './command';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor() {
    let receiver: Receiver = new Receiver();
    let command1: Command = new ConcreteCommand1(receiver);
    let command2: Command = new ConcreteCommand2(receiver);
    let invoker: Invoker = new Invoker();
    invoker.storeAndExecute(command1);
    invoker.storeAndExecute(command2);
   }

  invoke() : void {

  }
  ngOnInit() {
  }

}
