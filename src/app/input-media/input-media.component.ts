import { Component, EventEmitter, Output} from '@angular/core';
import { Media } from '../model/media.model';
import { MediaRepoService } from '../services/media-repo.service';

@Component({
  selector: 'app-input-media',
  templateUrl: './input-media.component.html',
  styleUrls: ['./input-media.component.css']
})
export class InputMediaComponent {
  allMedia: Media[] = [];
  @Output()
  submitInfo: EventEmitter<Media>;
  constructor() {
    this.submitInfo = new EventEmitter();
    }

   save(txtTitle: HTMLInputElement, txtDescription: HTMLInputElement,
        txtFilePath: HTMLInputElement, txtTags: HTMLInputElement) {
        const media = new Media(txtTitle.value, txtFilePath.value, txtDescription.value, txtTags.value.split(','));
        this.submitInfo.emit(media);
        txtTitle.value = "";
        txtDescription.value = "";
        txtFilePath.value = "";
        txtTags.value = "";
   }
}
