import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Media } from '../model/media.model';
import { MediaRepoService } from '../services/media-repo.service';

@Component({
  selector: 'app-update-media',
  templateUrl: './update-media.component.html',
  styleUrls: ['./update-media.component.css']
})
export class UpdateMediaComponent {
  public updatedMedia: Media
  constructor( public dialogRef: MatDialogRef<UpdateMediaComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public media: Media,public mediaRepo: MediaRepoService)
   {

   }
   update(id:HTMLInputElement, title: HTMLInputElement, filePath: HTMLInputElement, description: HTMLInputElement, tags: HTMLInputElement)
   {
     this.updatedMedia = new Media(title.value,filePath.value,description.value,[tags.value]);
     this.updatedMedia.setId(parseInt(id.value, 10));
      console.log(this.updatedMedia);
      this.mediaRepo.updateOneMedia(this.updatedMedia);
   }
  }
