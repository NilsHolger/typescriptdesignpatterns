import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikipediaSearchService } from './wikipedia.service';

@Component({
  selector: 'app-wikisearch',
  templateUrl: './wikisearch.component.html',
  styleUrls: ['./wikisearch.component.css']
})
export class WikiSearchComponent {
    title = 'Wikipedia Search';
    fetches = 'Fetches when typing stops';
    items: Observable<string[]>;

  private searchTermStream = new Subject<string>();
  search(term: string){
    this.searchTermStream.next(term);
  }
  constructor(private wikipediaSearchService : WikipediaSearchService) {
    this.items = this.searchTermStream
                 .debounceTime(300)
                 .distinctUntilChanged()
                 .switchMap((term: string) => this.wikipediaSearchService.search(term));
   }
}
