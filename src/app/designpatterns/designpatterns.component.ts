import { Component, OnInit } from '@angular/core';

import { Facade } from './facade';

@Component({
  selector: 'app-designpatterns',
  templateUrl: './designpatterns.component.html',
  styleUrls: ['./designpatterns.component.css']
})
export class DesignPatternsComponent implements OnInit {

  constructor() {
    this.invoke();
   }

  invoke() : void {
      const facade: Facade = new Facade();
      facade.implementation1();
      facade.implementation2();
}
  ngOnInit() {
  }

}
