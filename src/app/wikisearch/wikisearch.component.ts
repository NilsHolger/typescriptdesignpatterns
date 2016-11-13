import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WikipediaSearchService } from './wikipedia.service';

@Component({
  selector: 'app-wikisearch',
  templateUrl: './wikisearch.component.html',
  styleUrls: ['./wikisearch.component.css']
})
export class WikiSearchComponent {
    title = 'Wikipedia Search';
    fetches = 'Fetches after each keystroke';
    items: Observable<string[]>;

  constructor(private wikipediaSearchService : WikipediaSearchService) { }

  search(term: string){
    this.items = this.wikipediaSearchService.search(term);
  }

}
