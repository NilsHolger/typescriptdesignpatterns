import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';
import * as moment from 'moment';
import { AppStateService } from '../app-state.service';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList:Video[] = [];

  constructor(private videoService: VideoService, private appState: AppStateService) { }

  ngOnInit() {
    this.videoService.fetchV8('angular 2')
                              .subscribe(data => {
                                this.appState.videoList = data.items.map(item => {
                                return new Video( item.
                                item.id.videoId,
                                item.snippet.title,
                                item.snippet.thumbnails.high.url,
                                item.snippet.channelTitle,
                                item.snippet.channelId,
                                moment(item.snippet.publishedAt).fromNow(),
                                item.snippet.description)
                                });
                                this.appState.activeVideo = this.appState.videoList[0];
                              });
                            
}
}
