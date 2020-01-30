import { Component, OnInit } from '@angular/core';
import { Media } from '../model/media.model';
import { MediaRepoService } from '../services/media-repo.service';
import { parse } from 'querystring';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  constructor(public mediaRepoService: MediaRepoService) {
  }

  fillDummyMedia() {
    // this.mediaRepoService.addMedia(new Media("one", "/one.img", "first post" , ['cool', 'fun']));
    // this.mediaRepoService.addMedia(new Media("two", "/two.img", "second post" , ['crazy', 'holiday']));
    // this.mediaRepoService.addMedia(new Media("three", "/three.img" , "third post", ['nice', 'easy']));
  }
  save(media: Media) {
    console.log(media);
    this.mediaRepoService.addMedia(media);
  }
  deleteMedia(id: number)
  {
    this.mediaRepoService.removeMedia(id);
  }

}
