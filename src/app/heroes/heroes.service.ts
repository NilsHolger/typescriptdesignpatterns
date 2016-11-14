import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
var md5 = require('md5');
import { Hero } from './hero.model';

@Injectable()
export class HeroesService {
    private heroesUrl: string;
    private ts: number = 1;
    private publicKey: string = 'd0de94fbd2640993013cd29fd4b1a488';
    private privateKey: string = '';
    private hash; 

    constructor(private http: Http){
        this.hash = md5(this.ts + this.privateKey + this.publicKey);
        console.log(this.hash);
        this.heroesUrl = `//gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}`;
        console.log(this.heroesUrl);    
    }

    getHeroes(term: string) : Observable<Hero[]> {
            return this.http.get(`${this.heroesUrl}&nameStartsWith=${term}`)
                    .map((r: Response) => r.json().data.results);
    }
    getHeroesImage(thumbnail): string {
        return `${thumbnail.path}/landscape_incredible.${thumbnail.extension}`;
    }
}

