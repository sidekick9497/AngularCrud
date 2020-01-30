import { Injectable } from '@angular/core';
import { Media } from '../model/media.model';
import { HttpClient } from '@angular/common/http';
import { MediaHttpClientService } from '../media-http-client.service';
@Injectable({
  providedIn: 'root'
})
export class MediaRepoService {
  allMedia: Array<Media>;
  API_URL = "http://localhost:3000/allMedia";
  constructor(public mediaHttpClient: MediaHttpClientService) {
    this.getAllMedia();
  }
  addMedia(media: Media): void {
      this.mediaHttpClient.addMedia(media).subscribe((data) => {
        this.getAllMedia();
      });

  }
  removeMedia(id: number): void {
    this.mediaHttpClient.removeMedia(id).subscribe((data) =>
    {
      this.getAllMedia();
    })
  }
  getAllMedia() {
    console.log("method caleed: getallMedia");
    this.mediaHttpClient.getAllMedia().subscribe((data: any[]) => {
      this.allMedia = data;
    });
  }
  getOneMedia(mediaid: number): Media
  {
    return this.allMedia.find( ({ id }) => id === mediaid)
  }
  updateOneMedia(media: Media)
  {
    this.mediaHttpClient.updateMedia(media).subscribe((data:any)=>
    {
      this.getAllMedia();
    })
  }

}
