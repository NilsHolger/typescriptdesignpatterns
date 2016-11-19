import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Technology } from './technology.model';
var DB = require('lokijs');

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['../../bootstrap.css'],
  encapsulation: ViewEncapsulation.Native
})
export class FormsComponent implements OnInit {
  processes: Array<string> = ['analyze', 'design', 'build'];
  model = new Technology('mDN', 'https://developer.mozilla.org/de/docs/Web', true, 'action');
  constructor() {
   }

  ngOnInit() {
    }
  }
