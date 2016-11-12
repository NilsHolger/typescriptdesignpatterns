import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Adapter } from './adapter';
import { Technology } from './technology';
import { MYTECHNOLOGIES } from './mock-technologies';
import { TechnologyService } from './technology-service';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers: [TechnologyService]
})
export class TechnologyComponent {

  selectedTechnology: Technology;
  technologies: Technology[];

  constructor(private technologyService: TechnologyService, private router : Router){
  }
  ngOnInit(){
    this.getTechnologies();
  }

  getTechnologies(): void {
  this.technologyService.getTechnologies().then(technologies => this.technologies = technologies);
  }
  add(name: string) : void {
    name = name.trim();
    if (!name) { return; }
    this.technologyService.create(name).then(technology => 
    { 
      this.technologies.push(technology);
      this.selectedTechnology = null;
    });
  }
  delete(technology: Technology): void {
    this.technologyService
    .delete(technology.id)
    .then(() => {
      this.technologies = this.technologies.filter(t => t !== technology);
      if (this.selectedTechnology === technology) { this.selectedTechnology = null;}
    });
  }

  onSelect(technology: Technology) : void{
          this.selectedTechnology = technology;
  }
  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedTechnology.id]);
  }

}

