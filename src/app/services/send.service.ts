import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendService {

  constructor() {

  }

  transform(recievedString: string): string
  {
    return recievedString.toLocaleUpperCase();
  }
}
