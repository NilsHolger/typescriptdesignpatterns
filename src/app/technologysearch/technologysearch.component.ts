import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {Technology} from '../technology';
import {TechnologySearchService} from '../technologysearch-service';

@Component({
  selector: 'app-technologysearch',
  templateUrl: './technologysearch.component.html',
  styleUrls: ['./technologysearch.component.css'],
  providers: [TechnologySearchService]
})
export class TechnologySearchComponent implements OnInit {
  technologies: Observable<Technology[]>;

  private searchTerms = new Subject<string>();

  constructor(
      private technologySearchService: TechnologySearchService,
      private router: Router) {}
  // push search term in observable stream
  search(term: string): void { this.searchTerms.next(term); }
  ngOnInit() : void {
    this.technologies = this.searchTerms
    .debounceTime(200)       //wait for 200ms pause in events
    .distinctUntilChanged()  //ignore if next search term is same as previous
    .switchMap(term => term   //switch to new observable each time
    //return http search observable
    ? this.technologySearchService.search(term)
    //or observable of empty technologies if no search term
    : Observable.of<Technology[]>([])
    .catch(error => {
      //TODO: real error handling
      console.log(error);
      return Observable.of<Technology[]>([]);
    }));
  }
  gotoDetail(technology: Technology) : void {
    let link = ['/detail', technology.id];
    this.router.navigate(link);
  }
}
