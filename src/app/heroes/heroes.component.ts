import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Hero } from './hero.model';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private heroesService: HeroesService) { }

  getImage(thumbnail){
    return this.heroesService.getHeroesImage(thumbnail);
  }

  search(term: string) : void {
    this.searchTerms.next(term);
  }
  
  ngOnInit() {
    this.heroes = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.heroesService.getHeroes(term) : Observable.of<Hero[]>([]));
  }

}
