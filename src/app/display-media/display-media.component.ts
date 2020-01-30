import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Media } from '../model/media.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UpdateMediaComponent } from '../update-media/update-media.component';
import { MediaRepoService } from '../services/media-repo.service';



@Component({
  selector: 'app-display-media',
  templateUrl: './display-media.component.html',
  styleUrls: ['./display-media.component.css']
})
export class DisplayMediaComponent {
  @Input() myMedia: Media[];
  @Output() indexOutput: EventEmitter<number> ;

  constructor(public dialog: MatDialog,public mediaRepo: MediaRepoService) {
    this.indexOutput = new EventEmitter();
   }
  delete(index: HTMLElement) {

    // tslint:disable-next-line: radix
    const indexNumber: number = parseInt(index.innerHTML);
    console.log("delete method invoked" + indexNumber);
    this.indexOutput.emit((indexNumber));

  }
  OpenUpdateDialog(id: HTMLElement) {
    const mediaId = parseInt(id.innerHTML);
    const media = this.mediaRepo.getOneMedia(mediaId)
    let dialogRef = this.dialog.open(UpdateMediaComponent, {
      height: '600px',
      width: '600px',
      data: media
      });
}
}
