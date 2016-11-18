import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppStateService } from './app-state.service';

@Injectable()
export class VideoService {

  constructor(private http: Http, private appState: AppStateService) { }

  fetchV8(query: string){
    return this.http.get(`https://googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
                          '&maxResults=50' +
                          '&type=video' +
                          '&key=AIzaSyDQeLeCLxOgcI73aT_SqQp4Zf7TOdqYooM')
                          .map(response => response.json())
                        }
                      }
