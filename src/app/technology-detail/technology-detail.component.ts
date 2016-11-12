import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import { TechnologyService } from '../technology-service';

import { Technology } from '../technology';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {
  @Input()
  technology: Technology;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private technologyService: TechnologyService ) {

   }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.technologyService.getTechnology(id).then(technology => this.technology = technology);
    });
  }
  save(): void{
    this.technologyService.update(this.technology).then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
