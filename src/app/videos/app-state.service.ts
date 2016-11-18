import { Injectable } from '@angular/core';
import { Video } from './video';
@Injectable()
export class AppStateService {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() { }

}
