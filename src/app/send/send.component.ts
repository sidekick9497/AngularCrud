import { Component, OnInit } from '@angular/core';
import { SendService } from '../services/send.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
  myString: string;
  constructor(public sendService: SendService) {
    this.myString = "";
   }

  sendToService(inputString: HTMLInputElement)
  {
    this.myString = this.sendService.transform(inputString.value);
  }
  clear(inputString: HTMLInputElement)
  {
    inputString.value = "";
    this.myString = "";
  }
}
