import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Media } from './model/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaHttpClientService {
  API_URL = "http://localhost:3000/allMedia";
  constructor(public httpclient: HttpClient) {
   }
   getAllMedia()
   {
     return this.httpclient.get(this.API_URL);
   }
   addMedia(media: Media)
   {
     console.log("request to add data recieved");
     return this.httpclient.post(this.API_URL, media);
   }
   removeMedia(id: number)
   {
     console.log("request to deleted recived");
     return this.httpclient.delete(this.API_URL + "/" + id);
   }
   updateMedia(media:Media)
   {
     return this.httpclient.put(this.API_URL+"/"+media.id,media);
   }
}
