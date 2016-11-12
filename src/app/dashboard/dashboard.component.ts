import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyService } from '../technology-service';


@Component({
  //moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) {

   }

  ngOnInit() {
    this.getTechnologies();
  }
  getTechnologies() : void {
    this.technologyService.getTechnologies().then(technologies => this.technologies = technologies);
  }
}
