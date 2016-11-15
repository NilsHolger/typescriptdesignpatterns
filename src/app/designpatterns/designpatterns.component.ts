import { Component, OnInit } from '@angular/core';

import { Composite } from './composite';
import { Leaf } from './composite';

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
    console.log("invoke() invoked.");
    let leaf1 = new Leaf("1");
    let leaf2 = new Leaf("2");
    let leaf3 = new Leaf("3");
    let comp1 = new Composite("comp1");
    let comp2 = new Composite("comp2");

    comp1.add(leaf1);
    comp1.add(leaf2);
    comp1.add(leaf3);
    comp1.remove(2);
    comp2.add(leaf1);
    comp2.add(leaf3);
    comp1.operation();
    comp2.operation();
  
}


  ngOnInit() {
  }

}
