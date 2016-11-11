import { Component } from '@angular/core';
import { Server } from './server';
import { Client } from './client';
import { Singleton } from './singleton';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private singleton : Singleton){
     //console.log(this.singleton.show());
  } 
  result = this.singleton.show();
}

